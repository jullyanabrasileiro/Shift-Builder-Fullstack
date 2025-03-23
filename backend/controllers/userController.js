const User = require('../models/userModel');

// Get - all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find().populate('permission').populate('comments');
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Create - new user
const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = { getUsers, createUser };
