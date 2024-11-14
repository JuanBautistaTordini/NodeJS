const path = require('node:path');

// Para saber slash de mi SO
    // console.log(path.sep) "\"

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt'); // path join para unir rutas de archivos
console.log(filePath);

// obtener el nombre del archivo
const base = path.basename('content/subfolder/test.txt'); // path.basename para obtener el nombre del archivo
console.log(base); // test.txt
 
// nombre del archivo sin la extension
const filename = path.basename('content/subfolder/test.txt', '.txt'); // path.basename para obtener el nombre del archivo sin la extension
console.log(filename); // test

// obtener la extension del archivo
const extension = path.extname('image.jpg') // path.extname para obtener la extension del archivo
console.log(extension); // .jpg

