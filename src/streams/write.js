import { createWriteStream } from 'fs';
import { stdin } from 'process';
import { fileURLToPath } from 'url';
import path from 'path';

const write = async () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const src = path.resolve(__dirname, './files/fileToWrite.txt');

  const writable = createWriteStream(src);
  stdin.pipe(writable);
};

await write();
