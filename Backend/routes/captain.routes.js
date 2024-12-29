const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('Name must be atleast 3'),
    body('password').isLength({ min: 8 }).withMessage('Password must be at 8 chars long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('plate number must be at least 3 characters'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be a positive integer'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type'),
],
    captainController.registerCaptain
)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 8 }).withMessage('Password must be atleast of 8 chars')
],
    captainController.loginCaptain
)

router.get('/profile', authMiddleware.authCaptain,
    captainController.getCaptainProfile
)

router.get('/logout', authMiddleware.authCaptain,
    captainController.logoutCaptain
)

module.exports = router;