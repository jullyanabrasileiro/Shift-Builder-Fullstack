const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
  description: { type: String, required: true },
});

module.exports = mongoose.model('Permission', permissionSchema);
