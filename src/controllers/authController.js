const express = require('express');

const router = express.Router();

const authServices = require('../services/authServices');

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const sessionToken = await authServices.login(email, password);
    
    if (sessionToken) {
        res.cookie('sessionToken', sessionToken);
        res.redirect('/')
    } else {
        res.redirect('login');
    }
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', (req, res) => {
    const { email, password } = req.body;
    const isRegistered = authServices.register(email, password);

    if (isRegistered) {
        res.redirect('login');
    } else {
        res.redirect('register');
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie('sessionToken');
    res.redirect('/');
})

module.exports = router;
