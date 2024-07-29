import User from "../models/users.js";
import lodash from "lodash";

export const getUsers = async () => {
  try {
    const users = await User.find();
    const filteredUsers = users.map((user) => {
      return lodash.pick(user, ["_id", "username", "email"]);
    });
    return filteredUsers;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export const getUser = async (id) => {
  try {
    const user = await User.findById(id);
    return lodash.pick(user, ["_id", "username", "email"]);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export const getMe = async (userId) => {
  try {
    const user = await User.findById(userId._id).select("-password");
    return user;
  } catch (ex) {
    console.log(ex);
  }
};

export const saveUser = async (req, res, next) => {
  try {
    const existUser = await User.findOne({ email: req.body.email });
    if (existUser) return res.status(400).send("User already exist");
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    const savedUser = await newUser.save();
    const token = savedUser.generateAuthToken();
    res
      .header({
        "Access-Control-Expose-Headers": "x-auth-token",
        "x-auth-token": token,
      })
      .json(lodash.pick(savedUser, ["_id", "username", "email"]));
  } catch (error) {
    console.log(error);
    res.status(400).send(`${req.body.username} is not available`);
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
    if (updateUser)
      return lodash.pick(updatedUser, ["_id", "username", "email"]);
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
