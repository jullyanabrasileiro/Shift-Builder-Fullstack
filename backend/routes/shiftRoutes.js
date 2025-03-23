const express = require('express');
const { getShifts, createShift } = require('../controllers/shiftController');

const router = express.Router();

router.route('/').get(getShifts).post(createShift);

module.exports = router;
