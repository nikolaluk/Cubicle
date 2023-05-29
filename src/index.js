//System modules
const express = require('express');
const mongoose = require('mongoose');

//Modules
const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const dbConfig = require('./config/dbConfig');
const homeController = require('./controllers/homeController');

//App
const app = express();
const port = 5000;

//Config
dbConfig();
expressConfig(app);
handlebarsConfig(app);

//Routes
app.use(homeController);

app.listen(port, () => console.log(`Server listening on port ${port}...`));