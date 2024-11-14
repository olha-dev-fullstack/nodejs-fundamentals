const fs = require("node:fs/promises");

//Slow approach
// (async () => {
//     const destFile = await fs.open("./text-copy.txt", "w");
//     const result = await fs.readFile("./text.txt");

//     await destFile.write(result);
// })();

// // Self-implemented approach using buffers
// (async () => {
//   const srcFile = await fs.open("./text.txt", "r");
//   const destFile = await fs.open("./text-copy.txt", "w");
//   let bytesRead = -1;
//   while (bytesRead !== 0) {
//     const readResult = await srcFile.read();
//     bytesRead = await readResult.bytesRead;
//     if (bytesRead !== 16384) {
//       const indexOfNotFilled = readResult.buffer.indexOf(0);
//       const newBuffer = Buffer.alloc(indexOfNotFilled);
//       readResult.buffer.copy(newBuffer, 0, 0, indexOfNotFilled);
//       destFile.write(newBuffer);
//     } else {
//       await destFile.write(readResult.buffer);
//     }
//   }
// })();

// Self-implemented approach using buffers
(async () => {
    console.time("copy");
  const srcFile = await fs.open("./text.txt", "r");
  const destFile = await fs.open("./text-copy.txt", "w");

  const readStream = srcFile.createReadStream();
  const writeStream = destFile.createWriteStream();

  readStream.pipe(writeStream);
  console.timeEnd("copy");
})();
