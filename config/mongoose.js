import mongoose from "mongoose";

async function connectDB() {
  try {
    const connect = await mongoose.connect(process.env.DB_CONNECT_STRING);
    console.log("[database] database connection OK");
  } catch (error) {
    console.log("[database] database connection error ");
    console.log(error)
    process.exit(1);
  }
}

export default connectDB;
