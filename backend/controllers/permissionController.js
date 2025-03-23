const Permission = require('../models/permissionModel');

// Get - all permissions
const getPermissions = async (req, res) => {
  try {
    const permissions = await Permission.find();
    res.json(permissions);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Create - new permission
const createPermission = async (req, res) => {
  try {
    const permission = new Permission(req.body);
    const newPermission = await permission.save();
    res.status(201).json(newPermission);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = { getPermissions, createPermission };
