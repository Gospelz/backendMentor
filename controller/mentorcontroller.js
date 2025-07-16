import MentorModel from "../models/mentorSchema.js";
import bcrypt from "bcryptjs";
const addMentor = async (req, res) => {
    const salt = 10;
  try {
    const { name, email, availability, bio, skills, goals, password } = req.body;
    const hashPassword = await bcrypt.hash(password, salt);
    
    const mentor = new MentorModel({
      name,
      email,
      availability,
      bio,
      skills,
      password: hashPassword,
      goals,
    });
    await mentor.save();
    res.status(201).json({ message: "Mentor added successfully", mentor });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Server error" });
  }
};
const BookSession = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};


const getMentor = async (req, res) => {
  try {
    const mentors = await MentorModel.find();
    res.status(200).json({ mentors });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
export { addMentor, BookSession, getMentor };

