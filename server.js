import "dotenv/config";
import express from "express";
import connectDB from "./config/mongoose.js";

const app = express();

connectDB();

app.get("/", (req, res) => {
  return res.json("probando... 1, 2, 3....");
});

app.listen(process.env.APP_PORT, () => {
  console.log(
    `[Server] Servidor corriendo en el puerto ${process.env.APP_PORT}`
  );
});
