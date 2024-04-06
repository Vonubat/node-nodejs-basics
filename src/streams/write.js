import { createWriteStream } from 'fs';
import { stdin } from 'process';
import { getPath } from '../utils/index.js';

const fileName = 'fileToWrite.txt';
const src = getPath(import.meta.url, ['./files', fileName]);

const write = async () => {
  const writable = createWriteStream(src, { flags: 'a' });
  stdin.pipe(writable);
};

await write();
