const client = require("cloud-config-client");
const node = require('./resources/bootstrap');
const express = require('express');
const helmet = require('helmet');
const cors = require("cors");
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(helmet());
app.use(express.static(path.join(__dirname, 'assets')));

client.load({
    endpoint: node.cloud.config.uri,
    name: node.application.name,
    profiles: node.profiles.active,
    auth: {user: node.cloud.config.username, pass: node.cloud.config.password}
}).then(config => {
    global.appRoot = path.resolve(__dirname);
    config.bootstrap = node;
    global.config = config;

    require("./app/routes/lading-bootstrap.routes")(app);
    require("./app/routes/errors.routes")(app);

    return app.listen(node.server.port);
}).then(() => {
    console.log(`Server beží na porte ${node.server.port}`)
}).catch(console.error);