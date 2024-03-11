import express from "express";
const router = express.Router();

import userRoutes from "./userRoutes.js";
import partyRoutes from "./partyRoutes.js";
import transactionRoutes from "./transactionRoutes.js";
import { login } from "../middlewares/authMiddleware.js";
import { loginValidation } from "../middlewares/validationMiddleware.js";
import { authorize } from "../middlewares/authorizationMiddleware.js";
router.use("/auth", loginValidation, login);
router.use(authorize);
router.use("/users", userRoutes);
router.use("/parties", partyRoutes);
router.use("/transactions", transactionRoutes);

export default router;
