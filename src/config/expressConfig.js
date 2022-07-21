const express = require('express');
const router = require('../routes');
const cookieParser = require('cookie-parser')


const app = express();
const port = 5000;

const config = () => {
    app.use(cookieParser());
    app.use(express.urlencoded({extended: false}))
    app.use('/public', express.static('public'))
    app.use('/', router);
}

module.exports = {
    app,
    port,
    expressConfig: config
};