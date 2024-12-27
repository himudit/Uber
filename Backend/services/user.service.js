const userModel = require('../models/user.model');

module.exports.createUser = async ({ fullname, email, password }) => {
    const { firstname, lastname } = fullname;

    // Ensure required fields are provided
    if (!firstname || !email || !password) {
        throw new Error('Please provide all required fields');
    }

    // Create and save the user in the database
    const user = await userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    });

    return user;
};
