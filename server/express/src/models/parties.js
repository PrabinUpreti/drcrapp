import mongoose from "mongoose";

const partySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  photo: {
    type: String,
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

partySchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

partySchema.pre("findOneAndUpdate", function (next) {
  this._update.updatedAt = new Date();
  next();
});

const Party = mongoose.model("Party", partySchema);
export default Party;
