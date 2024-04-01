import express from "express";
import {
  deleteParty,
  getParty,
  getParties,
  saveParty,
  updateParty,
} from "../controllers/userPartyController.js";
const userPartyRoutes = express.Router();

userPartyRoutes.get("/", getParties);

userPartyRoutes.get("/:id", async (req, res) => {
  res.json(await getParty(req.params.id));
});

userPartyRoutes.post("/", saveParty);

userPartyRoutes.put("/:id", updateParty);

userPartyRoutes.delete("/:id", async (req, res) => {
  res.json(await deleteParty(req.params.id));
});
export default userPartyRoutes;
