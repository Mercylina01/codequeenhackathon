const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Chat = require('../models/chat');


// Generate JWT Helper
const generateToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// 1. Register User
const register = async (req, res) => {
    try {
        const { firstname, lastname, date_of_birth, occupation, role, email, password } = req.body;

        if (!email || !password || !firstname || !lastname) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Check if user already exists in DB
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ error: "User already registered." });
        }

        // Hash the password for security
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create the user
        const newUser = await User.create({
            firstname, lastname, date_of_birth, occupation, role, email, password: hashedPassword
        });

        res.status(201).json({
            message: "User registered successfully",
            user: { id: newUser._id, email: newUser.email, role: newUser.role },
            token: generateToken(newUser._id, newUser.role)
        });
    } catch (error) {
        res.status(500).json({ error: "Server error during registration." });
    }
};

// 2. Login User
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Find user by email
        const user = await User.findOne({ email });

        // Compare entered password with hashed password in DB
        if (user && (await bcrypt.compare(password, user.password))) {
            res.status(200).json({
                message: "Login successful",
                user: { id: user._id, firstname: user.firstname, role: user.role, email: user.email },
                token: generateToken(user._id, user.role)
            });
        } else {
            res.status(401).json({ error: "Invalid email or password." });
        }
    } catch (error) {
        res.status(500).json({ error: "Server error during login." });
    }
};

// 3. Get Dashboard Metrics (Protected)
const getDashboardData = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const mentorsCount = await User.countDocuments({ role: 'mentor' });
        const standardUsersCount = await User.countDocuments({ role: 'user' });
        const totalChats = await Chat.countDocuments();

        res.status(200).json({
            metrics: { totalUsers, mentorsCount, standardUsersCount, totalChats }
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch dashboard data." });
    }
};

// 4. Get All Mentors (Protected)
const getMentors = async (req, res) => {
    try {
        const mentors = await User.find({ role: 'mentor' }).select('-password'); // Exclude passwords
        res.status(200).json(mentors);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch mentors." });
    }
};

// 5. Get Chats / Messages (Protected)
const getChats = async (req, res) => {
    try {
        const chats = await Chat.find().sort({ createdAt: -1 }); // Newest first
        res.status(200).json(chats);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch chats." });
    }
};

// 6. Post New Chat Message (Protected)
const sendChat = async (req, res) => {
    try {
        const { sender, receiver, message } = req.body;
        if (!sender || !receiver || !message) {
            return res.status(400).json({ error: "Sender, receiver, and message content are required." });
        }

        const newChat = await Chat.create({ sender, receiver, message });
        res.status(201).json({ message: "Message sent", chat: newChat });
    } catch (error) {
        res.status(500).json({ error: "Failed to send chat." });
    }
};

module.exports = { register, login, getDashboardData, getMentors, getChats, sendChat };