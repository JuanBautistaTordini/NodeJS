const fs = require('node:fs')

const folder = process.argv[2] ?? '.'

fs.readdir(folder)
    .then(files => {
        filer.forEach(file => {
            console.log(file);
        });
    })
    .catch(err => {
        if (err){
            console.error('Error al leer el directorio', err);
            return;
        }
    })