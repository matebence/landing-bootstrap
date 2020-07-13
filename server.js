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

global.appRoot = path.resolve(__dirname);
global.config = node;

require("./app/routes/lading-bootstrap.routes")(app);
require("./app/routes/errors.routes")(app);

app.listen(node.server.port, () => {
    console.log(`Server beží na porte ${node.server.port}`)
});