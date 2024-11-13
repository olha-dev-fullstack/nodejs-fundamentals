// const fs = require("node:fs/promises");

// // Execution time: 5s
// //CPU Usage: 7%
// // Memory usage: 18MB
// (async () => {
//     console.time("writeMany");
//     const fileHandler = await fs.open('./test.txt', 'w');
//     for (let i = 0; i < 1000000; i++) {
//         await fileHandler.write(` ${i} `);
//     }
//     console.timeEnd("writeMany");
// })();

// const fs = require("node:fs");

// (async () => {
//     console.time("writeMany");
//     fs.open('./test.txt', 'w', (err, fd) => {
//     for (let i = 0; i < 1000000; i++) {
//         const buff = Buffer.from(` ${i} `, "utf-8")
//      fs.writeSync(fd, buff);
//     }
// });
//     console.timeEnd("writeMany");
// })();


// Execution time: 5s
//CPU Usage: 7%
// Memory usage: 18MB
// (async () => {
//   console.time("writeMany");
//   const fileHandler = await fs.open("./test.txt", "w");

//   const stream = fileHandler.createWriteStream();
//   for (let i = 0; i < 1000000; i++) {
  //     const buff = Buffer.from(` ${i} `, "utf-8");
  //     stream.write(buff);
  //   }
  //   console.timeEnd("writeMany");
  // })();
  const fs = require("node:fs/promises");
  
  (async () => {
    console.time("writeMany");
  const fileHandler = await fs.open("./test.txt", "w");

  const stream = fileHandler.createWriteStream();

  console.log(stream.writableHighWaterMark); //available buffer of the stream

  let i = 0;

  const writeMany = () => {
    while (i < 1000000) {
      const buff = Buffer.from(` ${i} `, "utf-8");

      if (i === 999999) {
        return stream.end(buff);
      }
      if (!stream.write(buff)) break;
      i++;
    }
  };
  writeMany();

  stream.on("drain", () => {
    writeMany();
  });

  stream.on("finish", () => {
    console.timeEnd("writeMany");
    fileHandler.close();
  });
})();
