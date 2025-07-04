import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
console.log("Connecting to:", process.env.MONGODB_URL); // Add this line
// database connection
const connectDb = async () => {
  try {
    mongoose.connection.on("error", (error) => {
      console.error("MongoDB connection error:", error);
    });
    const url = `${process.env.MONGODB_URL}/MentorProject`;
    await mongoose.connect(url);
    console.log("database connected successfully");
  } catch (error) {
    console.log(error);
  }
};
export default connectDb;
