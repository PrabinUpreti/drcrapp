import User from "../models/users.js";

export const getUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export const getUser = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export const saveUser = async (param) => {
  try {
    const newUser = new User({
      username: param.username,
      email: param.email,
      password: param.password,
    });
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    console.log(error);
    return "Existing information";
  }
};

export const updateUser = async (id, param) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      {
        username: param.username,
        email: param.email,
        password: param.password,
      },
      { new: true }
    );
    if (updateUser) return updatedUser;
    else return "User Not Found";
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id) => {
  try {
    const deletedUser = await User.deleteOne({ _id: id });
    if (deletedUser.deletedCount === 1) return "Deleted Sucessfully";
    else return "Failed To Delete";
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};
