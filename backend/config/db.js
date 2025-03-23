const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mmongoose.connect('mongodb://localhost:27017/seu_banco');

    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`❌ Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
