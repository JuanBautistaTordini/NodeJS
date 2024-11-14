// argumentos de entrada

console.log(process.argv); // argumentos de entrada

// controlar el proceso y su salida

process.exit(); // termina el proceso 
// process.exit(0); // termina el proceso con exit code 0
// process.exit(1); // termina el proceso con exit code 1
// process.exit(2); // termina el proceso con exit code 2

// podemos controlar eventos del proceso
process.on('exit', () => {
    // limpiar los recursos
    console.log('Proceso terminado');
});

// current working directory

process.cwd(); // current working directory

