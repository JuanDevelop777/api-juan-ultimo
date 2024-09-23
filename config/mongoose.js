import mongoose from "mongoose";

async function connectDB() {
  try {
    const connect = await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log("[database] database connection OK")
  } catch (error) {
    console.log("[database] database connection error ");
  }
}

export default connectDB;
