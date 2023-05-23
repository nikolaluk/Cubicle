const fs = require('fs');
const path = require('path');

exports.getAllCubes = function(){
    fs.readFile(path.resolve(__dirname,'../data/cubes.json'),(err,data) => {
        if(err){
            throw err;
        }
    
        let cubes = JSON.parse(data);
        return cubes[0];
    });
}
