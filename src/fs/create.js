import { writeFile } from 'fs/promises';
import { getPath } from '../utils/index.js';

const fileName = 'fresh.txt';
const data = 'I am fresh and young';
const dest = getPath(import.meta.url, [`./files`, fileName]);

const create = async () => {
  try {
    await writeFile(dest, data, { flag: 'wx' });
  } catch (err) {
    // console.error(err);
    throw new Error('FS operation failed');
  }
};

await create();
