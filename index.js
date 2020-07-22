const { Worker, threadId } = require('worker_threads');

function simple(pathScript, data) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(pathScript, {
      workerData: data,
    });
    let threadId = worker.threadId;
    worker.on('online', () => {
      console.log('worker ready, threadId: ' + threadId);
    });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
      else console.log('worker exit, threadId: ' + threadId);
    });
  });
};

function sliced(pathScript, array, maxThreads) {
  let threads = Math.ceil(array.length / maxThreads);
  let sliced_array = [];
  for (let i = 0; i < array.length; i += threads) {
      sliced_array.push(array.slice(i, i + threads));
      
  }
  for (let value of sliced_array) {
    simple(pathScript, value);
  }
}

module.exports = {
  simple: simple,
  sliced: sliced,
}
