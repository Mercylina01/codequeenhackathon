const register = (req, res) => {
    const {
        firstname,
        lastname,
        occupation,
        email,
        password
    } = req.body;

    console.log({
        firstname,
        lastname,
        occupation,
        email,
        password
    });

    res.status(201).json({
        message: "User registered successfully"
    });

};

module.exports = {
    register
};