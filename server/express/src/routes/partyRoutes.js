import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  saveUser,
  updateUser,
} from "../controllers/userController.js";
const partyRoutes = express.Router();

partyRoutes.get("/", async (req, res) => {
  res.json(await getUsers());
});

partyRoutes.get("/:id", async (req, res) => {
  res.json(await getUser(req.params.id));
});

partyRoutes.post("/", async (req, res) => {
  res.json(await saveUser(req.body));
});

partyRoutes.put("/:id", async (req, res) => {
  res.json(await updateUser(req.params.id, req.body));
});

partyRoutes.delete("/:id", async (req, res) => {
  res.json(await deleteUser(req.params.id));
});
export default partyRoutes;
