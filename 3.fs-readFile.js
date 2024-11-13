const fs = require('node:fs');

console.log('Leyendo el archivo...');
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log('primer texto:', text)
})

console.log('Hacer Cosas mientras leer el archivo...');

console.log('Leytondo el archivo...');
fs.readFile('./archivo2.txt', 'utf-8', (err, secondtext) => {
    console.log('segundo texto:', secondtext);
});
