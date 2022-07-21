const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
    const payload = {
        name: 'Peshko'
    };
    const options = {
        expiresIn: '1d'
    };
    const secret = 'myverysecretsecret'
    const token = jwt.sign(payload, secret, options);

    res.cookie('sess-token', token);
    res.send('Welcome');
})

app.get('/jwt', (req, res) => {
    res.send(req.cookies['sess-token']);
})

app.listen(5000, () => console.log('Server listening on port 5000...'));