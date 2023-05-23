//System modules
const express = require('express');
const path = require('path');

//Modules
const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const homeController = require('./controllers/homeController');

const app = express();
const port = 5000;

//Config
expressConfig(app);
handlebarsConfig(app);

//Routes
app.use(homeController);

app.get('/create', (req,res) => {
    res.render('create');
});

app.listen(port, () => console.log(`Server listening on port ${port}...`));