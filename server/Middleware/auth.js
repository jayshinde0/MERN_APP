//middle ware to protect routes
import jwt from 'jsonwebtoken';
import user from '../models/user.js';
export const protectroute =async (req, res, next) => {
  try {
    const token = req.headers.token;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
    const user= await User.fndById(decoded.userid).select("-password");
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }
    req.user = user;
    next();

  } catch (error) {
    console.error("Error in protectroute:", error.message);
    res.json({ success: false, message: error.message || "Internal server error" });
  }
};
