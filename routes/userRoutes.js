import upload from "../config/multer.js";
import userController from "../controller/userController.js";
import express from "express";

const router = express.Router();

router.get("/api/users", userController.getAll);

router.get("/api/users/:id", userController.findById);

router.post("/api/users", upload.single("avatar"), userController.create);

router.patch("/api/users/:id", userController.update);

router.delete("/api/users", userController.destroy);

export default router;
