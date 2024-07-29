import express from "express";
import { getTransactionsOfParty } from "../controllers/transactionsOfPartyController.js";
const transactionOfPartyRoutes = express.Router();

// transactionOfPartyRoutes.get("/", async (req, res) => {
//   res.json(await getTransactions());
// });

transactionOfPartyRoutes.get("/:id", async (req, res) => {
  res.json(await getTransactionsOfParty(req.params.id));
});

// transactionOfPartyRoutes.post("/", saveTransaction);

// transactionOfPartyRoutes.put("/:id", updateTransaction);

// transactionOfPartyRoutes.delete("/:id", async (req, res) => {
//   res.json(await deleteTransaction(req.params.id));
// });
export default transactionOfPartyRoutes;
