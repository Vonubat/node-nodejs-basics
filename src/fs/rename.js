import { fileURLToPath } from 'url';
import path from 'path';
import { rename as renameFile, access } from 'fs/promises';

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
    const __dirname = fileURLToPath(new URL('.', import.meta.url));
    const src = path.resolve(__dirname, './files/wrongFilename.txt');
    const dest = path.resolve(__dirname, './files/properFilename.md');

    const isExist = await exists(dest);
    if (isExist) {
      throw isExist;
    }

    await renameFile(src, dest);
  } catch (error) {
    // console.log(error);
    throw new Error('FS operation failed');
  }
};

await rename();
