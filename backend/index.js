const express = require("express")
const app = express();
app.use(express.json());

const PORT=3000;
app.get("/", (req,res) => {
  res.send("Welcome to our backend")  
});
app.listen(PORT, () => {
console.log("Server is listening to the PORT", PORT)
});

const connectDB = require("../config/db");

connectDB();

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("../config/db");

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Code Queen Backend Running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);