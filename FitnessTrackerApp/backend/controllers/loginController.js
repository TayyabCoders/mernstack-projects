const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userAccount');

const Login = async (req, res) => {
    const { userEmail, userPassword } = req.body;
    console.log(userEmail)
    console.log(userPassword)

    if (!userEmail) {
        return res.status(400).json({ error: 'Email is required' });
    }

    if (!userPassword) {
        return res.status(400).json({ error: 'Password is required' });
    }

    // Find user
    const userAuth = await userModel.findOne({ userEmail });

    if (!userAuth) {
        return res.status(401).json({ error: 'Credentials are incorrect' });
    }

    // Password authentication
    const passwordMatch = await bcrypt.compare(userPassword, userAuth.userPassword);

    if (!passwordMatch) {
        return res.status(401).json({ error: 'Credentials are incorrect' });
    }

    // JWT access
    // if (!process.env.SECRET_KEY) {
    //     return res.status(500).json({ error: 'Internal server error' });
    // }

    const token = jwt.sign(
        { id: userAuth },
        'sdsada', // Use the SECRET_KEY from environment variables
        { expiresIn: '1d' } // Shorter expiry for security
    );

    return res.status(200).json({ token });
};

module.exports = { Login };
