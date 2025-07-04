import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDb from "./config/Mongodb.js";
import AuthRoutes from "./routes/AuthRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", AuthRoutes);
app.use("/api/profile", profileRoutes);

//connecting to database
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Mentor Backend" });
});
connectDb();

app.listen(8000, () => {
  console.log("Server is running");
});
