const fs = require('node:fs')

fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error al leer el directorio', err)
    return
  }
  
  files.forEach(file => {
    console.log(file)
  })
})

// node 6.ls.js

// .git
// 1.os-info.js
// 2.fs-stats.js
// 3.fs-readFile-sync.js
// 3.fs-readFile.js
// 4.fs-async-await-parallel.mjs
// 4.fs-promise.js
// 5.fs-async-await.js
// 5.fs-async-await.mjs
// 5.path.js
// 6.ls.js
// archivo.txt
// archivo2.txt
// cjs
// image-1.png
// image-2.png
// image-3.png
// image-4.png
// image-5.png
// image.png
// mjs
// README.md