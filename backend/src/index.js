const dns = require('dns');



dns.setServers([ '1.1.1.1', '8.8.8.8'])



// Load environment variables immediately
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./db/connect');

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Global Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors());         // Allow frontend to communicate without cross-origin errors
app.use(morgan('dev'));  // Log API requests to the terminal (e.g., "GET /users/login 200")

// Import route modules
const userRoutes = require('./routes/users');

// Route middlewares
app.use('/users', userRoutes);

app.get("/", (req, res) => {
    res.status(200).send("Welcome to the Code Queen Hackathon Backend API");
});

// Start listening
  
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})

// connectDB();