const fs = require('fs');
const path = require('path');

const getAllCubes = function(search,from,to,callback){
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

        callback(cubes);
    });
}

const getCubeById = function(id,callback){
    fs.readFile(path.resolve(__dirname,'../data/cubes.json'),(err,data) => {
        if(err){
            throw err;
        }
    
        let cube = JSON.parse(data).filter(x => x.id == id)[0];;

        callback(cube);
    });
}

exports.getAllCubes = getAllCubes;
exports.getCubeById = getCubeById;