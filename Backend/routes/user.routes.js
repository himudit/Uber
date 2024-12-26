const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controller')

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('Name must be atleast 3'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at 6 chars long'),
],
    userController.registerUser
)

module.exports = router;