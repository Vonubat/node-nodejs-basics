import { fileURLToPath } from 'url';
import path from 'path';
import { readFile } from 'fs/promises';

const read = async () => {
  try {
    const __dirname = fileURLToPath(new URL('.', import.meta.url));
    const src = path.resolve(__dirname, './files/fileToRead.txt');

    const file = await readFile(src, { encoding: 'utf8' });
    console.log(file);
  } catch (error) {
    // console.log(error);
    throw new Error('FS operation failed');
  }
};

await read();
