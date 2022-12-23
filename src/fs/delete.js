import { fileURLToPath } from 'url';
import path from 'path';
import { rm } from 'fs/promises';

const remove = async () => {
  try {
    const __dirname = fileURLToPath(new URL('.', import.meta.url));
    const src = path.resolve(__dirname, './files/fileToRemove.txt');

    await rm(src);
  } catch (error) {
    // console.log(error);
    throw new Error('FS operation failed');
  }
};

await remove();
