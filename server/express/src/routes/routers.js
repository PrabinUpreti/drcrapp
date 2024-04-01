import express from "express";
const router = express.Router();

import userRoutes from "./userRoutes.js";
import partyRoutes from "./partyRoutes.js";
import transactionRoutes from "./transactionRoutes.js";
import { login } from "../middlewares/authMiddleware.js";
import { loginValidation } from "../middlewares/validationMiddleware.js";
import { authorize } from "../middlewares/authorizationMiddleware.js";
import transactionOfPartyRoutes from "./transactionOfPartyRoutes.js";
import userPartyRoutes from "./userPartyRoutes.js";
import userPartyAmountRoutes from "./userPartyAmountRoutes.js";
router.post("/auth", loginValidation, login);
router.use(authorize);
router.use("/users", userRoutes); // admin all access
router.use("/parties", partyRoutes); // admin all access
router.use("/userParties", userPartyRoutes); // user
router.use("/userPartiesAmount", userPartyAmountRoutes); // user

router.use("/transactions", transactionRoutes); // admin all access
router.use("/transactionOfParty", transactionOfPartyRoutes); // user, party

export default router;
