import { createReadStream } from 'fs';
import { stdout } from 'process';
import { getPath } from '../utils/index.js';

const fileName = 'fileToRead.txt';
const src = getPath(import.meta.url, ['./files', fileName]);

const read = async () => {
  const readable = createReadStream(src);
  readable.pipe(stdout);
};

await read();
