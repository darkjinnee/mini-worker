const miniWorker = require('../index');

let maxThreads = 5;
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
miniWorker.sliced('./example-script.js', array, maxThreads);