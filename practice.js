// console.log(__filename);
// console.log(__dirname);
// console.log(global);
// console.log(process);
// console.log(process.cwd());     // <== to samo co w dirname, ścieżka absolutna do pliku, cwd (current work dir)
// // console.log('test');
// // process.exit(0); // <== zamyka sktrypt

// setImmediate(function () {      // <== setImmediate wykonuje funkcje nakoniec
//   console.log("setImmediate callback");
// });

// process.nextTick(function () {      // <== nextTick wykonuje funkcje jaknajszybciej
//   console.log("Next tick callback");
// });

// // <***> Użycie paczek w skrypcie <***>

// const isNumber = require('is-number-object');        // <== zaciąganie paczek do skryptu

// // <***>
// //==============================================================================================
// // logger.js
// const info = message => {
//     console.log(`INFO: ${message}`);
// }

// const log = message => {
//     console.log(`LOG: ${message}`);
// }

// module.exports = {
//     info,
//     log,
// }

// //==============================================================================================
// // index.js
// const logger = require('./logger');

// logger.info('info message');
// logger.log('log message');
// //==============================================================================================
// // <***>

// const fs = require("fs").promises;

// fs.readFile("readme.txt")
//   .then((data) => console.log(data.toString()))
//   .catch((error) => console.log(error.message));

// fs.writeFile("readme.txt", "Hello World!") // <== nadpisuje istniejący plik lub, jeśli nie istnieje tworzy go
//   .then(() => console.log("Success"))
//   .catch((error) => console.log(error.message));

// fs.appendFile("readme.txt", "\n New line of text") // <== dodaje do pliku, \n - nowa linika
//   .then(() => console.log("Success"))
//   .catch((error) => console.log(error.message));

// fs.rename("oldname.txt", "newname.txt") // <== zmienia nazwe pliku
//   .then(() => console.log("Success"))
//   .catch((error) => console.log(error.message));

// fs.unlink("newname.txt") // <== usuwa pliku
//   .then(() => console.log("Success"))
//   .catch((error) => console.log(error.message));

// //==============================================================================================

// async function saveValuesToFile() {
//   let values = "";
//   for (let i = 1; i <= 10; i++) {
//     values += `${i}\n`;
//   }
//   try {
//     await fs.writeFile("values.txt", values, { encoding: "utf8" });
//     console.log("Values saved to file successfully!");
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// saveValuesToFile();

// //==============================================================================================

// fs.readdir(__dirname).then(files => {
//     console.log(files)    // result => [ 'index.js', 'values.txt', 'example.txt' ]
// }

// fs.readdir(__dirname).then((files) => {
//   files.map(async (filename) => {
//     console.log(filename);    // result =>  index.js values.txt example.txt
//   });
// });

// fs.readdir(__dirname).then((files) => {
//   files.map(async (filename) => {
//     const stats = fs.stat(filename);
//     console.log(stats); // result =>  Stats...
//   });
// });

// fs.readdir(__dirname).then((files) => {
//   files.map(async (filename) => {
//     const stats = fs.stat(filename);
//     return {
//       name: filename,
//       size: stats.size,
//       data: stats.mtime,
//     };
//   });
// });

// fs.readdir(__dirname)
//   .then((files) => {
//     return Promise.all(
//       files.map(async (filename) => {
//         const stats = await fs.stat(filename);
//         return {
//           name: filename,
//           size: stats.size,
//           data: stats.mtime,
//         };
//       })
//     );
//   })
//   .then((results) => {
//     console.table(results);
//   });

// //==============================================================================================
