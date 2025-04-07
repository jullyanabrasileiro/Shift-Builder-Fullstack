const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); 
const connectDB = require('./config/db');

const userRoutes = require('./routes/userRoutes');
const shiftRoutes = require('./routes/shiftRoutes');
const permissionRoutes = require('./routes/permissionRoutes');
const commentRoutes = require('./routes/commentRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/shifts', shiftRoutes);
app.use('/api/permissions', permissionRoutes);
app.use('/api/comments', commentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
