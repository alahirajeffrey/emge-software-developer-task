const User = require('../models/userModel');
const crypto = require('crypto-js');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {

    //validate request
    if (!req.body.username) return res.status(400).send({ message: "Username required.." })
    if (!req.body.email) return res.status(400).send({ message: "Email required.." })
    if (!req.body.password) return res.status(400).send({ message: "Password required.." })

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: crypto.AES.encrypt(req.body.password, process.env.SEC_PASS).toString()
    })

    try {
        const savedUser = await user.save()
        return res.status(200).json({ message: "New user created" })
    } catch (err) {
        return res.status(500).json(err)
    }
}

exports.login = async (req, res) => {

    //validate request
    if (!req.body.username) return res.status(400).send({ message: "Username required.." });
    if (!req.body.email) return res.status(400).send({ message: "Email required.." });
    if (!req.body.password) return res.status(400).send({ message: "Password required.." });

    try {
        //check if user exists
        const user = await User.findOne({ username: req.body.username });

        //check if user exists
        if (!user) return res.status(404).json('User not found. Create user and try logging in again');

        //check if email is correct
        if (user.email !== req.body.email) return res.status(404).json({ message: "email not correct" })

        //decrypt saved password
        const password = crypto.AES.decrypt(user.password, process.env.SEC_PASS).toString(crypto.enc.Utf8);

        //compare passwords
        if (password !== req.body.password) return res.status(401).json("Wrong credentials");

        //create json web token
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        },
            process.env.JWT_SEC_KEY,
            { expiresIn: "1d" });

        res.status(200).json({ message: "User logged in" });


    } catch (err) {
        res.json(err.message)
    }
}