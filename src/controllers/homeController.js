const express = require('express');
const jwtServices = require('../services/jwtServices');

const router = express.Router();

router.get('/', (req, res) => {
    const token = req.cookies.sessionToken;

    const result = jwtServices.decodeToken(token);
    if (result) {
        res.render('home', { email: result.email });
    } else {
        res.render('home', { email: 'Guest' });
    }
    
});

module.exports = router;