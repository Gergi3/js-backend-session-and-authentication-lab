const jwt = require('jsonwebtoken');
const secret = 'VmEfI5fHL1V0ARtamHBf';

const createToken = (email) => {
    const payload = {
        email
    };
    const options = {
        expiresIn: '2d',
    };

    return jwt.sign(payload, secret, options);
}

const decodeToken = (token) => jwt.verify(token, secret, (err, decoded) => {
    if (err) {
        return false;
    }
    return decoded;
});

module.exports = {
    createToken,
    decodeToken
};