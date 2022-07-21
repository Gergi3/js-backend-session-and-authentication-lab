const { app, port, expressConfig } = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');

expressConfig();
handlebarsConfig(app);

app.listen(port, () => console.log(`Server is listening on port ${port}...`));