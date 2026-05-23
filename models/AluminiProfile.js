const mongoose = require("mongoose");

const alumniSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    graduationYear: Number,
    company: String,
    position: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("AlumniProfile", alumniSchema);