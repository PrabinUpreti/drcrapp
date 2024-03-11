import express from "express";
import {
  deleteTransaction,
  getTransaction,
  getTransactions,
  saveTransaction,
  updateTransaction,
} from "../controllers/transactionController.js";
const transactionRoutes = express.Router();

transactionRoutes.get("/", async (req, res) => {
  res.json(await getTransactions());
});

transactionRoutes.get("/:id", async (req, res) => {
  res.json(await getTransaction(req.params.id));
});

transactionRoutes.post("/", saveTransaction);

transactionRoutes.put("/:id", updateTransaction);

transactionRoutes.delete("/:id", async (req, res) => {
  res.json(await deleteTransaction(req.params.id));
});
export default transactionRoutes;
