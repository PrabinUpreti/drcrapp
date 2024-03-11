import Party from "../models/parties.js";
import jwt from "jsonwebtoken";

export const getParties = async () => {
  try {
    const parties = await Party.find();
    return parties;
  } catch (error) {
    console.error("Error fetching parties:", error);
  }
};

export const getParty = async (id) => {
  try {
    const party = await Party.findById(id);
    return party;
  } catch (error) {
    console.error("Error fetching party:", error);
  }
};

export const saveParty = async (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    const createdBy = decoded._id;
    const newParty = new Party({
      name: req.body.name,
      phone: req.body.phone,
      address: req.body.address,
      photo: req.body.photo,
      createdBy: createdBy,
    });
    const savedParty = await newParty.save();
    res.json(savedParty);
  } catch (error) {
    return "Existing information";
  }
};

export const updateParty = async (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    const createdBy = decoded._id;

    const updatedParty = await Party.findOneAndUpdate(
      { _id: req.params.id },
      {
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        photo: req.body.photo,
        createdBy: createdBy,
      },
      { new: true }
    );
    if (updatedParty) res.json(updatedParty);
    else res.send("Party Not Found");
  } catch (error) {
    console.log(error);
  }
};

export const deleteParty = async (id) => {
  try {
    const deletedParty = await Party.deleteOne({ _id: id });
    if (deletedParty.deletedCount === 1) return "Deleted Sucessfully";
    else return "Failed To Delete";
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
