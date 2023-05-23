const router = require('express').Router();
const fs = require('fs');
const path = require('path');

//GET
router.get('/', (req,res) => {
    res.render("index");
});

router.get('/create', (req,res) => {
    res.render('create');
});

router.get('/about',(req,res) => {
    res.render('about');
});

router.get('*',(req,res) => {
    res.render('404');
});

//POST
router.post('/create',(req,res) => {
    const {name,description,imageUrl,difficultyLevel} = req.body;
    let id = new Date().getTime();
    
    fs.readFile(path.resolve(__dirname,'../data/cubes.json'),(err,data) => {
        
        let cubes = JSON.parse(data);
        cubes.push({name,description,imageUrl,difficultyLevel,id});
        let json = JSON.stringify(cubes);

        fs.writeFile(path.resolve(__dirname,'../data/cubes.json'),json, () => console.log("Cube added"));
    });

    res.redirect('/');
});



module.exports = router;