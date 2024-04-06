import { Worker } from 'worker_threads';
import os from 'os';
import { getPath } from '../utils/index.js';

const workerDest = getPath(import.meta.url, ['./worker.js']);

const performCalculations = async () => {
  let increment = 10;
  const cpus = os.cpus().length;
  const result = [];

  const createWorker = () => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(workerDest, {
        workerData: { n: increment++ },
      });

      worker.on('message', (value) => {
        result.push({ status: 'resolved', value: value });
        resolve(result);
      });

      worker.on('error', () => {
        result.push({ status: 'error', value: null });
        resolve(result);
      });

      worker.on('exit', (code) => {
        if (code !== 0) {
          reject(new Error(`Worker stopped with exit code ${code}`));
        }
      });
    });
  };

  for (let i = 0; i < cpus; i++) {
    createWorker().then(() => {
      if (result.length === cpus) {
        console.log(result);
      }
    });
  }
};

await performCalculations();
