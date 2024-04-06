import { rm } from 'fs/promises';
import { getPath } from '../utils/index.js';

const fileName = 'fileToRemove.txt';
const src = getPath(import.meta.url, ['./files', fileName]);

const remove = async () => {
  try {
    await rm(src);
  } catch (err) {
    // console.log(err);
    throw new Error('FS operation failed');
  }
};

await remove();
