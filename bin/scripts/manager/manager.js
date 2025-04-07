const fs = require('fs');

class Manager {

    read(path, data){

    }
    write(oldFilePath, data, newFilePath){
        fs.readFile(oldFilePath, (buffer) => {
            const template = JSON.parse(buffer);
            const newData = Object.assign({}, template, data);
            fs.writeFile(newFilePath, JSON.stringify(newData))
        });
    }
    delete(path){fs.unlink(path)}

 
}

module.exports = Manager;