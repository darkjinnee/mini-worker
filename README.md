# Mini Worker
Working example implementation of "worker_threads"

## Use
```javascript
const miniWorker = require('mini-worker');

// simple
miniWorker.simple(pathScript, data);

// sliced
miniWorker.sliced(pathScript, array, maxThreads);
```

## Work Script (example)
```javascript
const { workerData, parentPort, threadId } = require('worker_threads');

// Your code
console.log(workerData);

// parentPort.postMessage('hello world');
```

## Run
```bash
node --experimental-worker ./***
```

## Test
```bash
# simple
npm run simpletest

# sliced
npm run slicedtest
```
