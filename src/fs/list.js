import { readdir } from 'fs/promises';
import { getPath } from '../utils/index.js';

const src = getPath(import.meta.url, ['./files']);

const list = async () => {
  try {
    const files = await readdir(src);
    console.log(files);
  } catch (err) {
    // console.log(err);
    throw new Error('FS operation failed');
  }
};

await list();
