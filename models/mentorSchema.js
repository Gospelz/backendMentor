import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    availability: {
      type: String,
      required: true,
      enum: ["NOT-AVAILABLE", "AVAILABLE", "PENDING"],
      default: "AVAILABLE",
    },
    bio: { type: String, default: "" },
    topic: { type: String },
    goals: { type: String },
  },
  { timestamps: true },
  { minimize: false }
);
const mentorModel = mongoose.model.mentor || mongoose.model("mentor", authSchema);
export default mentorModel;

