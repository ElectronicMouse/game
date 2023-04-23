const fs = require('fs');

class Manager {

  read(path, data) {
    fs.readFile(path, (buffer) => {
        const file = JSON.parse(buffer);
        if (Array.isArray(data)) {
          const results = data.reduce((acc, curr) => {
            if (file.hasOwnProperty(curr)) {
              acc[curr] = file[curr];
            }
            return acc;
          }, {});
          return results;
        } else {
          return file;
        }
      
    });
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