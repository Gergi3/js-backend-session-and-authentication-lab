const User = require('../models/User');
const bcrypt = require('bcrypt');
const { createJwtToken } = require('./jwtServices');

const saltRounds = 10;

const findByEmail = (email) => User.find({email});

const hashPassword = (pass) => bcrypt.hash(pass, saltRounds);

const register = async (email, pass) => {
    const found = await findByEmail(email);
    if (found.length != 0) {
        return false;
    }

    const hashedPassword = await hashPassword(pass);
    const createdUser = await User.create({
        email,
        password: hashedPassword
    });
    return createdUser;
}

const login = async (email, pass) => {
    const found = await findByEmail(email)
    if (found.length != 1) {
        return false;
    }
    const user = found[0];
    const isValidPassword = await bcrypt.compare(pass, user.password);

    if (!isValidPassword) {
        return false;
    }

    const token = createJwtToken(email);
    return token;
}

module.exports = {
    register,
    login
};