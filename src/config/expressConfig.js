const express = require('express');
const router = require('../routes');

const app = express();
const port = 5000;

const config = () => {
    app.set('static', 'public');
    app.use('/', router);
}

module.exports = {
    app,
    port,
    expressConfig: config
};