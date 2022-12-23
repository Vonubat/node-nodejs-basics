import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';
import path from 'path';

const decompress = async () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const src = path.resolve(__dirname, './files/archive.gz');
  const dest = path.resolve(__dirname, './files/fileToCompress.txt');

  const readable = createReadStream(src);
  const writable = createWriteStream(dest);

  const unzip = createUnzip();
  pipeline(readable, unzip, writable, (err) => console.error(err));
};

await decompress();
