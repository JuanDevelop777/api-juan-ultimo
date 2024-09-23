import "dotenv/config";
import connectDB from "../config/mongoose.js";
import User from "../models/User-Models.js";

connectDB();

async function userSeeder() {
  await User.create({
    firstName: "juan",
    lastname: "mantilla",
    email: "juan@gmail.com",
    password: "123123123123",
    avatar: "1.png",
    age: "55",
  });
}

userSeeder();
