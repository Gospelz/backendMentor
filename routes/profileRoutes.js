import express from "express";
import { getUserData, EditProfile } from "../controller/profile.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
const profileRoutes = express.Router();
// Get user profile data
profileRoutes.get("/getUserData/:id", authMiddleware, getUserData);
// Edit user profile
profileRoutes.put("/editProfile/:id", authMiddleware, EditProfile);
export default profileRoutes;
