const Pool = require("./pool");
const { performance } = require("perf_hooks");

// Clear a line in the console
const clearLine = (dir) => {
  return new Promise((resolve, reject) => {
    process.stdout.clearLine(dir, () => {
      resolve();
    });
  });
};

// Move the cursor in the console
const moveCursor = (dx, dy) => {
  return new Promise((resolve, reject) => {
    process.stdout.moveCursor(dx, dy, () => {
      resolve();
    });
  });
};

const numWorkers = 4;
const pool = new Pool(numWorkers);

let result = [];
let tasksDone = 0;
const totalTasks = 200_000;
const batchSize = 1_000;
let batchIndex = 0;
const start = performance.now();

function submitBatch(startIndex, endIndex) {
  let batchTaskCount = 0;

  for (let i = startIndex; i < endIndex; i++) {
    batchTaskCount++;

    pool.submit(
      "generatePrimes",
      {
        count: 20,
        start: 10_000_000_000 + i * 500,
        format: true,
        log: false,
      },
      async (primes) => {
        // Log some statistics every now and then
        if (tasksDone % 100 === 0) {
          await moveCursor(0, -1);
          await clearLine(0);
          await moveCursor(0, -1);
          await clearLine(0);

          console.log(
            `Event loop utilization: ${
              performance.eventLoopUtilization().utilization
            }`
          );
          console.log(
            `Progress ${Math.round((tasksDone / totalTasks) * 100)}%...`
          );
        }

        tasksDone++;
        batchTaskCount--;

        // If going with a gigantic totalTask, make sure to change this line to keep the event loop utilization low (the concat function will get time consuming with big arrays).
        // You could try saving the result to a file instead, maybe after each batch is done, and then set the result back to an empty array.
        result = result.concat(primes);

        // When all tasks are done
        if (tasksDone === totalTasks) {
          console.log(`Time taken: ${performance.now() - start}ms`);
          console.log(result.sort());
          process.exit(0);
        }

        // When all batch tasks are done
        if (batchTaskCount === 0) {
          batchIndex++;
          submitNextBatch();
        }
      }
    );
  }
}

function submitNextBatch() {
  if (batchIndex * batchSize < totalTasks) {
    const startIndex = batchIndex * batchSize;
    const endIndex = Math.min((batchIndex + 1) * batchSize, totalTasks);
    submitBatch(startIndex, endIndex);
  }
}

// Start the first batch
submitNextBatch();
