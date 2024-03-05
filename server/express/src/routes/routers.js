import express from "express";
const router = express.Router();

import userRoutes from "./userRoutes.js";
import partyRoutes from "./partyRoutes.js";
import transactionRoutes from "./transactionRoutes.js";
import { login } from "../middlewares/authMiddleware.js";
import { loginValidation } from "../middlewares/validationMiddleware.js";

router.use("/users", userRoutes);
router.use("/parties", partyRoutes);
router.use("/transactions", transactionRoutes);
router.use("/auth", loginValidation, login);

export default router;
