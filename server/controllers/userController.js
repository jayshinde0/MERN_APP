//signup new user
import { response } from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
export const signup = async (req, res) => {
  const { email, fullName, password, profilePicture, bio } = req.body;
  try {
    if (!email || !fullName || !password || !bio) {
      return res.json({ success: false, message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.json({ success: false, message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      email,
      fullName,
      password: hashedPassword,
      profilePicture: profilePicture || " ",
      bio: bio || "",
    });
    const token = generateToken(newUser._id);
    res.json({
      success: true,
      userData: newUser,
      token,
      message: "User created successfully",
    });
  } catch (error) {
    console.error("Error in signup:", error);
     res.json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};
