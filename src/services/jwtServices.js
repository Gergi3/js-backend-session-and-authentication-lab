const jwt = require('jsonwebtoken');
const jwtSecret = 'VmEfI5fHL1V0ARtamHBf';

const createJwtToken = (email) => {
    const payload = {
        email
    };
    const options = {
        expiresIn: '2d',
    };

    return jwt.sign(payload, secret, options);
}

module.exports = {
    createJwtToken
};