const { Worker, isMainThread, workerData, parentPort } = require('worker_threads');
const { performance } = require('perf_hooks');

if (isMainThread) {
  // This is the main thread

  // Number to count up to
  const targetNumber = 10000000000;
  
  // Number of threads
  const numThreads = 10;

  // Calculate the range for each thread
  const chunkSize = Math.ceil(targetNumber / numThreads);
  
  // Record start time for single-threaded version
  const singleThreadStartTime = performance.now();

  // Single-threaded version
  let singleThreadCount = 0;
  for (let i = 1; i <= targetNumber; i++) {
    singleThreadCount++;
  }

  // Record end time for single-threaded version
  const singleThreadEndTime = performance.now();
  const singleThreadDuration = singleThreadEndTime - singleThreadStartTime;

  console.log(`Single-threaded count: ${singleThreadCount}`);
  console.log(`Time taken (single-threaded): ${singleThreadDuration} milliseconds`);

  // Record start time for multithreaded version
  const multiThreadStartTime = performance.now();

  // Multithreaded version
  let multiThreadCount = 0;

  const workers = [];

  for (let i = 0; i < numThreads; i++) {
    const start = i * chunkSize + 1;
    const end = Math.min((i + 1) * chunkSize, targetNumber);

    const worker = new Worker(__filename, {
      workerData: { start, end },
    });

    // Listen for messages from the worker thread
    worker.on('message', (count) => {
      multiThreadCount += count;
    });

    // Listen for errors in the worker thread
    worker.on('error', (error) => {
      console.error(`Error in thread ${worker.threadId}: ${error}`);
    });

    // Listen for the worker thread to exit
    worker.on('exit', (code) => {
      console.log(`Thread ${worker.threadId} exited with code ${code}`);
    });

    workers.push(worker);
  }

  // Wait for all worker threads to finish
  Promise.all(workers.map(worker => new Promise(resolve => worker.on('exit', resolve))))
    .then(() => {
      // Record end time for multithreaded version
      const multiThreadEndTime = performance.now();
      const multiThreadDuration = multiThreadEndTime - multiThreadStartTime;

      console.log(`Multi-threaded count: ${multiThreadCount}`);
      console.log(`Time taken (multithreaded): ${multiThreadDuration} milliseconds`);
    });
} else {
  // This is a worker thread

  // Get the range from workerData
  const { start, end } = workerData;

  // Perform the counting in the worker thread
  let count = 0;
  for (let i = start; i <= end; i++) {
    count++;
  }

  // Send the partial count back to the main thread
  parentPort.postMessage(count);
}
