import { fork } from 'child_process';
import { getPath } from '../utils/index.js';

const fileName = 'script.js';
const src = getPath(import.meta.url, ['./files', fileName]);

const spawnChildProcess = async (args) => {
  const child = fork(src, args);

  child.on('error', (err) => {
    throw new Error(err);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(
  [1, 2, 3]
  /* [someArgument1, someArgument2, ...] */
);
