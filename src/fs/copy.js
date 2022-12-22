import { fileURLToPath } from 'url';
import { cp } from 'fs/promises';
import path from 'path';

const copy = async () => {
  try {
    const __dirname = fileURLToPath(new URL('.', import.meta.url));
    const src = path.resolve(__dirname, './files');
    const dest = path.resolve(__dirname, './files-copy');

    await cp(src, dest, { recursive: true, force: false, errorOnExist: true });
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await copy();
