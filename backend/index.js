// backend/index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

// Load env variables
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require('./routes/auth');
const employeeRoutes = require('./routes/employees');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
