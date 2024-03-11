import Transaction from "../models/transactions.js";
import jwt from "jsonwebtoken";

export const getTransactions = async () => {
  try {
    const transactions = await Transaction.find();
    return transactions;
  } catch (error) {
    console.error("Error fetching transactions:", error);
  }
};

export const getTransaction = async (id) => {
  try {
    const transaction = await Transaction.findById(id);
    return transaction;
  } catch (error) {
    console.error("Error fetching transaction:", error);
  }
};

export const saveTransaction = async (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    const createdBy = decoded._id;
    const newTransaction = new Transaction({
      amount: req.body.amount,
      drcr: req.body.drcr,
      party: req.body.party,
      createdBy: createdBy,
    });
    const savedTransaction = await newTransaction.save();
    res.json(savedTransaction);
  } catch (error) {
    console.log(error);
    return "Existing information";
  }
};

export const updateTransaction = async (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    const createdBy = decoded._id;
    const updatedTransaction = await Transaction.findOneAndUpdate(
      { _id: req.params.id },
      {
        amount: req.body.amount,
        drcr: req.body.drcr,
        party: req.body.party,
        createdBy: createdBy,
      },
      { new: true }
    );
    if (updatedTransaction) res.json(updatedTransaction);
    else res.send("Party Not Found");
  } catch (error) {
    console.log(error);
  }
};

export const deleteTransaction = async (id) => {
  try {
    const deletedTransaction = await Transaction.deleteOne({ _id: id });
    if (deletedTransaction.deletedCount === 1) return "Deleted Sucessfully";
    else return "Failed To Delete";
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
