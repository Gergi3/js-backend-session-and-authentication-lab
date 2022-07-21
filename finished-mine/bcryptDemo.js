const express = require('express');
const bcrypt = require('bcrypt');

const app = express();

const validPassword = 'pass123';
const saltRounds = 10;


app.get('/', (req, res) => {
    res.send('Welcome');
});

app.get('/check/:pass', async (req, res) => {
    const pass = req.params.pass;
    const salt = await bcrypt.genSalt(saltRounds)
    const hashedValidPassword = await bcrypt.hash(validPassword, salt);
    // const hashedValidPassword = bcrypt.hash(validPassword, saltRounds);

    const isCorrect = await bcrypt.compare(pass, hashedValidPassword);

    if (isCorrect) {
        res.send('Correct!');
    } else {
        res.status(401).send('Invalid password');
    }
});

app.listen(5000, () => console.log('Server listening on port 5000...'));