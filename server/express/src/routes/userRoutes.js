import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  saveUser,
  updateUser,
} from "../controllers/userController.js";
const userRoutes = express.Router();

userRoutes.get("/", async (req, res) => {
  res.json(await getUsers());
});

userRoutes.get("/:id", async (req, res) => {
  res.json(await getUser(req.params.id));
});

userRoutes.post("/", async (req, res) => {
  res.json(await saveUser(req.body));
});

userRoutes.put("/:id", async (req, res) => {
  res.json(await updateUser(req.params.id, req.body));
});

userRoutes.delete("/:id", async (req, res) => {
  res.json(await deleteUser(req.params.id));
});
export default userRoutes;
