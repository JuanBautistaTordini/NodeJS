const fs = require('node:fs/promises') // Importa el módulo fs/promises para trabajar con el sistema de archivos de forma asíncrona
const path = require('node:path') // Importa el módulo path para trabajar con rutas de archivos

const folder = process.argv[2] ?? '.' // Obtiene la carpeta de la línea de comandos o usa el directorio actual si no se proporciona

async function ls(folder) {
    let files
    try {
        files = await fs.readdir(folder) // Lee los archivos en la carpeta especificada
    } catch {
        console.error(`Error al leer el directorio ${folder}`) // Muestra un mensaje de error si no se puede leer la carpeta

        process.exit(1) // Termina el proceso con un código de salida de 1
    }

    const filePromises = files.map(async file => {
        // Recupera la información de cada archivo
        const filePath = path.join(folder, file) // Obtiene la ruta completa del archivo
        let Stats
        try{
            Stats = await fs.stat(filePath) // Obtiene la información del archivo
        } catch {
            console.error(`Error al leer la información del archivo ${filePath}`) // Muestra un mensaje de error si no se puede obtener la información del archivo
            process.exit(1)
        }

        const isDirectory = Stats.isDirectory() // Verifica si el archivo es un directorio
        const fileType = isDirectory ? 'd' : 'f' // Asigna 'd' si es un directorio o 'f' si es un archivo
        const fileSize = Stats.size // Obtiene el tamaño del archivo
        const fileModified = Stats.mtime.toLocaleString() // Obtiene la fecha de modificación del archivo en formato de cadena

        // Crea una cadena de texto con la información del archivo
        return `tipo: ${fileType} ${file.padEnd(20)} Size: ${fileSize.toString().padStart(10)} last modified: ${fileModified}`
    })

    const filesInfo = await Promise.all(filePromises) // Espera a que se completen todas las promesas de información de archivos
    filesInfo.forEach(fileInfo => console.log(fileInfo)) // Imprime la información de cada archivo en la consola
}

ls(folder) // Llama a la función ls con la carpeta especificada
