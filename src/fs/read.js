import { readFile } from 'fs/promises';
import { getPath } from '../utils/index.js';

const fileName = 'fileToRead.txt';
const src = getPath(import.meta.url, ['./files', fileName]);

const read = async () => {
  try {
    const file = await readFile(src, { encoding: 'utf8' });
    console.log(file);
  } catch (err) {
    // console.log(err);
    throw new Error('FS operation failed');
  }
};

await read();
