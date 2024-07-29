import express from "express";
import { updateAmount } from "../controllers/userPartyController.js";
const userPartyAmountRoutes = express.Router();

userPartyAmountRoutes.put("/:id", updateAmount);

export default userPartyAmountRoutes;
