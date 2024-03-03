import Transaction from "../models/transactions.js";

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

export const saveTransaction = async (param) => {
  try {
    const newTransaction = new Transaction({
      amount: param.amount,
      drcr: param.drcr,
      party: param.party,
      createdBy: param.createdBy,
    });
    const savedTransaction = await newTransaction.save();
    return savedTransaction;
  } catch (error) {
    console.log(error);
    return "Existing information";
  }
};

export const updateTransaction = async (id, param) => {
  try {
    const updatedTransaction = await Transaction.findOneAndUpdate(
      { _id: id },
      {
        amount: param.amount,
        drcr: param.drcr,
        party: param.party,
        createdBy: param.createdBy,
      },
      { new: true }
    );
    if (updatedTransaction) return updatedTransaction;
    else return "Party Not Found";
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
