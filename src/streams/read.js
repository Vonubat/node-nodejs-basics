import { createReadStream } from 'fs';
import { stdout } from 'process';
import { fileURLToPath } from 'url';
import path from 'path';

const read = async () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const src = path.resolve(__dirname, './files/fileToRead.txt');

  const readable = createReadStream(src);
  readable.pipe(stdout);
};

await read();
