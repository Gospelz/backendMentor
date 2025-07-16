import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDb from "./config/Mongodb.js";
import AuthRoutes from "./routes/AuthRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import cookieParser from "cookie-parser";
import mentorRoutes from "./routes/mentorRoutes.js";
dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cookieParser());
const allowOrigin = [
  "https://frontend-mentor-pi-six.vercel.app",
  "http://localhost:5173",
];
app.use(
  cors({
    origin: allowOrigin,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use("/api/auth", AuthRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/", mentorRoutes);

//connecting to database
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Mentor Backend" });
});
connectDb();

app.listen(8000, () => {
  console.log("Server is running");
});
