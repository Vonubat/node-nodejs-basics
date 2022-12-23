import { fileURLToPath } from 'url';
import path from 'path';
import { readdir } from 'fs/promises';

const list = async () => {
  try {
    const __dirname = fileURLToPath(new URL('.', import.meta.url));
    const src = path.resolve(__dirname, './files');

    const files = await readdir(src);
    for (const file of files) {
      console.log(file);
    }
  } catch (error) {
    // console.log(error);
    throw new Error('FS operation failed');
  }
};

await list();
