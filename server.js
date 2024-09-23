import fs from "fs";
import path from "path";
import "dotenv/config";
import express from "express";
import connectDB from "./config/mongoose.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

connectDB();

const uploadDir = path.join(import.meta.dirname, "public/avatars");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

app.use(userRoutes);

app.listen(process.env.APP_PORT, () => {
  console.log(
    `[Server] Servidor corriendo en el puerto ${process.env.APP_PORT}`
  );
});
