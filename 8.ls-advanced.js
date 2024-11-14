const fs = require('node:fs/promises')

const folder = process.argv[2] ?? '.'

fs.readdir(folder)
    .then(files => {
        files.forEach(file => {
            console.log(file);
        });
    })
    .catch(err => {
        if (err){
            console.error('Error al leer el directorio', err);
            return;
        }
    })

// node 8.ls-advanced.js
// node 8.ls-advanced.js content   
// node 8.ls-advanced.js content/subfolder
