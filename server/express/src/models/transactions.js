import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  drcr: {
    type: String,
    required: true,
  },
  party: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Party",
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

transactionSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

transactionSchema.pre("findOneAndUpdate", function (next) {
  this._update.updatedAt = new Date();
  next();
});

const Transaction = mongoose.model("Transaction", transactionSchema);
export default Transaction;
