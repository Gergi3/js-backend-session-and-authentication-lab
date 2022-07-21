const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.get('/', (req, res) => {
    req.session['test'] = 'session info';
    res.send('Welcome');
})

app.get('/session', (req, res) => {
    res.json(req.session);
})

app.get('/clear-session', (req, res) => {
    req.session.destroy();
})

app.listen(5000, () => console.log('Server listening on port 5000...'));