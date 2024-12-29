const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({ fullname, email, password, vehicle }) => {
    const { firstname, lastname } = fullname;
    const { color, plate, capacity, vehicleType } = vehicle;

    // Ensure required fields are provided
    if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('Please provide all required fields');
    }

    const captain = await captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    });

    return captain;
};
