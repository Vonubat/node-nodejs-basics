import { fileURLToPath } from 'url';
import path from 'path';
import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const src = path.resolve(__dirname, './files/script.js');

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
