// File System

const fs = require('node:fs'); // a partir de node 16, se recomienda utilizar 'node:'

const stats = fs.statSync('./archivo.txt');

// Sincrono
console.log(
    stats.isFile(), // si es un fichero
    stats.isDirectory(), // si es un directorio
    stats.isSymbolicLink(), // si es un enlace simbolico
    stats.size, // tamaño del archivo en bytes
)
