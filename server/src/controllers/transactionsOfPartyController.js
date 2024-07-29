import Transaction from "../models/transactions.js";
import jwt from "jsonwebtoken";

export const getTransactionsOfParty = async (id) => {
  try {
    const transaction = await Transaction.find({
      party: id,
    });
    return transaction;
  } catch (error) {
    console.error("Error fetching transaction:", error);
  }
};
