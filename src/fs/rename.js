import { rename as renameFile, access } from 'fs/promises';
import { getPath } from '../utils/index.js';

const srcFileName = 'wrongFilename.txt';
const src = getPath(import.meta.url, ['./files', srcFileName]);
const destFileName = 'properFilename.md';
const dest = getPath(import.meta.url, ['./files', destFileName]);

const exists = async (path) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};

const rename = async () => {
  try {
    const isExist = await exists(dest);
    if (isExist) {
      throw isExist;
    }

    await renameFile(src, dest);
  } catch (err) {
    // console.log(err);
    throw new Error('FS operation failed');
  }
};

await rename();
