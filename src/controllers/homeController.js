const router = require('express').Router();
const fs = require('fs');
const path = require('path');

//const cubeManager = require('../managers/cubeManager'); 

//GET
router.get('/', (req,res) => {
    //const cubes = cubeManager.getAllCubes();
    const {search,from,to} = req.query;

    //TODO: Export in manager
    fs.readFile(path.resolve(__dirname,'../data/cubes.json'),(err,data) => {
        if(err){
            throw err;
        }
    
        let cubes = JSON.parse(data);

        if(search){
            cubes = cubes.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
        }
        if(from){
            cubes = cubes.filter(cube => cube.difficultyLevel >= from);
        }
        if(to){
            cubes = cubes.filter(cube => cube.difficultyLevel <= to);
        }
        res.render('index',{cubes});

    });
});

router.get('/create', (req,res) => {
    res.render('create');
});

router.get('/about',(req,res) => {
    res.render('about');
});

router.get('/details/:id',(req,res) => {
    fs.readFile(path.resolve(__dirname,'../data/cubes.json'),(err,data) => {
        
        let cubes = JSON.parse(data);
        let currentCube = cubes.filter(x => x.id == req.params.id)[0];

        res.render('details',currentCube);
    });
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

        fs.writeFile(path.resolve(__dirname,'../data/cubes.json'), json, () => console.log("Cube added"));
    });

    res.redirect('/');
});



module.exports = router;