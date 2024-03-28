import express from "express";
const router = express.Router();

import userRoutes from "./userRoutes.js";
import partyRoutes from "./partyRoutes.js";
import transactionRoutes from "./transactionRoutes.js";
import { login } from "../middlewares/authMiddleware.js";
import { loginValidation } from "../middlewares/validationMiddleware.js";
import { authorize } from "../middlewares/authorizationMiddleware.js";
import transactionOfPartyRoutes from "./transactionOfPartyRoutes.js";
router.post("/auth", loginValidation, login);
router.use(authorize);
router.use("/users", userRoutes);
router.use("/parties", partyRoutes);
router.use("/transactions", transactionRoutes);
router.use("/transactionOfParty", transactionOfPartyRoutes);

export default router;
