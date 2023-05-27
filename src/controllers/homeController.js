const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const cubeManager = require('../managers/cubeManager'); 

//GET
router.get('/', (req,res) => {
    const {search,from,to} = req.query;

    cubeManager.getAllCubes(search,from,to, (cubes) => {
        res.render('index',{cubes,search,from,to});
    });
});

router.get('/create', (req,res) => {
    res.render('create');
});

router.get('/about',(req,res) => {
    res.render('about');
});

router.get('/details/:id',(req,res) => {
    cubeManager.getCubeById(req.params.id, (cube) => {
        res.render('details',cube);
    });
});

router.get('*',(req,res) => {
    res.render('404');
});


//POST
router.post('/create',(req,res) => {
    const {name,description,imageUrl,difficultyLevel} = req.body;
    cubeManager.createNewCube(name,description,imageUrl,difficultyLevel);
    res.redirect('/');
});



module.exports = router;