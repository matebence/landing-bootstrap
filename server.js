const node = require('./resources/bootstrap');
const express = require('express');
const morgan = require("morgan");
const helmet = require('helmet');
const cors = require("cors");
const path = require('path');
const fs = require('fs');

const app = express();

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

app.use(morgan('common', {stream: fs.createWriteStream('/tmp/proxy-server.log', {flags: 'a'})}));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(helmet());
app.use(cors());

global.appRoot = path.resolve(__dirname);
global.config = node;

require("./app/routes/lading.routes")(app);
require("./app/routes/proxy.routes")(app);
require("./app/routes/errors.routes")(app);

app.listen(node.server.port, () => {
    console.log(`Server beží na porte ${node.server.port}`)
});