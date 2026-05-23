const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { 
    register, 
    login, 
    getDashboardData, 
    getMentors, 
    getChats, 
    sendChat 
} = require('../controllers/users');

// Public Auth endpoints
router.post('/register', register);
router.post('/login', login);

// Protected Application modules (Requires JWT Token)
router.get('/dashboard', protect, getDashboardData);
router.get('/mentors', protect, getMentors);
router.get('/chats', protect, getChats);
router.post('/chats', protect, sendChat);

module.exports = router;