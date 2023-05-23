//System modules
const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

//Modules
const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');

const app = express();
const port = 5000;

//Config
expressConfig(app);
handlebarsConfig(app);


//Routes
app.get('/', (req,res) => {
    res.render("index");
});

app.listen(port, () => console.log(`Server listening on port ${port}...`));