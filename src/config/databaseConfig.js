const res = require('express/lib/response');
const mongoose = require('mongoose');
const name = 'auth-db'
const host = 'localhost';
const port = 27017;
const url = `mongodb://${host}:${port}/${name}`;

module.exports = () => mongoose.connect(url)
    
        