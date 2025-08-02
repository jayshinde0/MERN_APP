import express from "express";
import user from "../models/user";  
import { signup, login, getUserProfile, updateProfile, checkAuth } from "../controllers/usercontroller.js";
import { protectRoute } from "../Middleware/auth.js";
const userRoutes = express.Router();

userRoutes.post("/signup", signup);
userRoutes.post("/login", login);
userRoutes.put("/update-profile", protectRoute, updateProfile);
userRoutes.get("/check", protectRoute, checkAuth);

export default userRoutes;