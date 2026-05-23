const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    date_of_birth: { type: String },
    occupation: { type: String, default: "Student" },
    role: { type: String, enum: ['user', 'mentor', 'admin'], default: 'user' },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt dates
});

module.exports = mongoose.model('User', UserSchema);