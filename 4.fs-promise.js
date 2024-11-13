const fs = require('node:fs/promises');

console.log('Leyendo el archivo...');
fs.readFile('./archivo.txt', 'utf-8')
    .then(text => {
        console.log('primer archivo:', text);
    })

console.log('Hacer Cosas mientras leer el archivo...');

console.log('Leytondo el archivo...');
fs.readFile('./archivo2.txt', 'utf-8')
    .then(secondtext => {
        console.log('segundo archivo:', secondtext);
    })
