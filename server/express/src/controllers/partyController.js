import Party from "../models/parties.js";

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

export const saveParty = async (param) => {
  try {
    const newParty = new Party({
      name: param.name,
      phone: param.phone,
      address: param.address,
      photo: param.photo,
      createdBy: param.createdBy,
    });
    const savedParty = await newParty.save();
    return savedParty;
  } catch (error) {
    console.log(error);
    return "Existing information";
  }
};

export const updateParty = async (id, param) => {
  try {
    const updatedParty = await Party.findOneAndUpdate(
      { _id: id },
      {
        name: param.name,
        phone: param.phone,
        address: param.address,
        photo: param.photo,
        createdBy: param.createdBy,
      },
      { new: true }
    );
    if (updatedParty) return updatedParty;
    else return "Party Not Found";
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
