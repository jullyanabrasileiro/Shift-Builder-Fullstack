const Shift = require('../models/shiftModel');

// Get - all shifts
const getShifts = async (req, res) => {
  try {
    const shifts = await Shift.find().populate('userId');
    res.json(shifts);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Create - new shift
const createShift = async (req, res) => {
  try {
    const shift = new Shift(req.body);
    const newShift = await shift.save();
    res.status(201).json(newShift);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = { getShifts, createShift };
