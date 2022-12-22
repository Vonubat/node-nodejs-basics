import { fileURLToPath } from 'url';
import { writeFile } from 'fs/promises';
import path from 'path';

const create = async () => {
  try {
    const __dirname = fileURLToPath(new URL('.', import.meta.url));
    const name = 'fresh.txt';
    const dest = path.resolve(__dirname, './files', name);
    const data = 'I am fresh and young';

    await writeFile(dest, data, { flag: 'wx' });
  } catch {
    throw new Error('FS operation failed');
  }
};

await create();
