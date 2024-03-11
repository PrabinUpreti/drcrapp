import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  getMe,
  saveUser,
  updateUser,
} from "../controllers/userController.js";
import { userValidation } from "../middlewares/validationMiddleware.js";
import { hash } from "../middlewares/hashMiddleware.js";
import { authorize } from "../middlewares/authorizationMiddleware.js";
import { admin } from "../middlewares/adminMiddleware.js";
const userRoutes = express.Router();

userRoutes.use(admin);

userRoutes.get("/me", async (req, res) => {
  res.json(await getMe(req.user));
});

userRoutes.get("/", authorize, async (req, res) => {
  res.json(await getUsers());
});

userRoutes.get("/:id", async (req, res) => {
  res.json(await getUser(req.params.id));
});

userRoutes.post("/", userValidation, hash, saveUser);

userRoutes.put("/:id", userValidation, hash, async (req, res) => {
  res.json(await updateUser(req.params.id, req.body));
});

userRoutes.delete("/:id", async (req, res) => {
  res.json(await deleteUser(req.params.id));
});
export default userRoutes;
