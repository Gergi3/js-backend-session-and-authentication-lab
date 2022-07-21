const { app, port, expressConfig } = require('./config/expressConfig');
const connectToDb = require('./config/databaseConfig');
const handlebarsConfig = require('./config/handlebarsConfig');

expressConfig();
handlebarsConfig(app);

connectToDb()
    .then(() => {
        app.listen(port, () => console.log(`Server is listening on port ${port}...`));
    })
    .catch(err => {
        console.log(err);
    });