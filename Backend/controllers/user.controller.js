const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');

module.exports.registerUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { fullname, email, password } = req.body;

        const hashPassword = await userModel.hashPassword(password);

        const user = await userService.createUser({
            fullname,
            email,
            password: hashPassword
        });
        const token = await user.generateAuthToken();
        res.status(201).json({ token, user });
    } catch (err) {
        res.status(404).send({ error: err.message });
        console.error(err);
    }
}

module.exports.loginUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        const user = await userModel.findOne({ email }).select('+password');

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await user.comparePassword(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const token = await user.generateAuthToken();

        res.status(200).json({ token, user });

    }
    catch (err) {
        console.log(err);
    }
}

module.exports.getUserProfile = async (req, res, next) => {
    try {
        const user = req.user;
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
    }
}