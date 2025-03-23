const mongoose = require('mongoose');

const shiftSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    perHour: { type: Number, required: true },
    place: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Shift', shiftSchema);
