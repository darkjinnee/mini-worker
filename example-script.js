const { workerData, parentPort, threadId } = require('worker_threads');

// Your code
console.log(workerData);

// parentPort.postMessage('hello world');