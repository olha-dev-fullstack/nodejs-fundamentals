const { Worker, isMainThread, threadId } = require("worker_threads");

if (isMainThread === true) {
  const worker = new Worker(__filename);
  console.log("This is the main thread with id", threadId);
} else {
  console.log("This is a worker thread with id", threadId);
}
