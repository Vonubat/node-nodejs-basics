import { cp } from 'fs/promises';
import { getPath } from '../utils/index.js';

const src = getPath(import.meta.url, ['./files']);
const dest = getPath(import.meta.url, ['./files-copy']);

const copy = async () => {
  try {
    await cp(src, dest, { recursive: true, force: false, errorOnExist: true });
  } catch (err) {
    // console.error(err);
    throw new Error('FS operation failed');
  }
};

await copy();
