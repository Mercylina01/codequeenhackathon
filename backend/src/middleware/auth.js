const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
    let token;

    // Check if the token is in the headers (Format: "Bearer <token>")
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            
            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            
            // Add user ID to the request object
            req.user = decoded;
            next();
        } catch (error) {
            res.status(401).json({ error: "Not authorized, token failed" });
        }
    } else {
        res.status(401).json({ error: "Not authorized, no token provided" });
    }
};

module.exports = { protect };