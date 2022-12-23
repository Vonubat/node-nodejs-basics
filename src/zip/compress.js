import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';
import path from 'path';

const compress = async () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const src = path.resolve(__dirname, './files/fileToCompress.txt');
  const dest = path.resolve(__dirname, './files/archive.gz');

  const readable = createReadStream(src);
  const writable = createWriteStream(dest);

  const gzip = createGzip();
  pipeline(readable, gzip, writable, (err) => console.error(err));
};

await compress();
