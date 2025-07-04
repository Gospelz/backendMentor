import jwt from "jsonwebtoken";
import AuthModel from "../models/authSchema.js";
const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res
        .status(401)
        .json({ message: "unauthorized access, no token found" });
    }
    let decodedToken;
    try {
      decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    } catch (error) {
      console.log(error);
      return res
        .status(401)
        .json({ message: "unauthorized access, invalid token" });
    }
    const User = await AuthModel.findById(decodedToken.id);
    if (!User) {
      return res
        .status(404)
        .json({ message: "unauthorized access, user not found" });
    }
    req.user = User;
    next();
  } catch (error) {
    console.log(error);
  }
};
export { authMiddleware };
