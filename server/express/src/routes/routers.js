import express from "express";
const router = express.Router();

import userRoutes from "./userRoutes.js";
import partyRoutes from "./partyRoutes.js";
import transactionRoutes from "./transactionRoutes.js";

router.use("/users", userRoutes);
router.use("/parties", partyRoutes);
router.use("/transactions", transactionRoutes);

export default router;
