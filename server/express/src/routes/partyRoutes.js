import express from "express";
import {
  deleteParty,
  getParty,
  getParties,
  saveParty,
  updateParty,
} from "../controllers/partyController.js";
const partyRoutes = express.Router();

partyRoutes.get("/", async (req, res) => {
  res.json(await getParties());
});

partyRoutes.get("/:id", async (req, res) => {
  res.json(await getParty(req.params.id));
});

partyRoutes.post("/", async (req, res) => {
  res.json(await saveParty(req.body));
});

partyRoutes.put("/:id", async (req, res) => {
  res.json(await updateParty(req.params.id, req.body));
});

partyRoutes.delete("/:id", async (req, res) => {
  res.json(await deleteParty(req.params.id));
});
export default partyRoutes;
