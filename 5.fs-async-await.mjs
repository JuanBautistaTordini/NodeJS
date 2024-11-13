import { readFile } from 'node:fs/promises';

console.log('Leyendo el primer archivo...')

const text = await readFile('./archivo.txt', 'utf-8')
console.log('primer archivo:', text)

console.log('--> Hacer Cosas mientras leer el archivo...');

console.log('Leyendo segundo archivo...');
const secondtext = await readFile('./archivo2.txt', 'utf-8')
console.log('segundo archivo:', secondtext);


// IIFE - Immediately Invoked Function Expression

// (async () => {
//     console.log('Leyendo el primer archivo...')
    
//     const text = await readFile('./archivo.txt', 'utf-8')
//     console.log('primer archivo:', text)
    
//     console.log('--> Hacer Cosas mientras leer el archivo...');
    
//     console.log('Leyendo segundo archivo...');
//     const secondtext = await readFile('./archivo2.txt', 'utf-8')
//     console.log('segundo archivo:', secondtext);
//     }
// )();
