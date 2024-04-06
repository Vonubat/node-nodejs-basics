import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { getPath } from '../utils/index.js';

const srcFileName = 'fileToCompress.txt';
const src = getPath(import.meta.url, ['./files', srcFileName]);
const destFileName = 'archive.gz';
const dest = getPath(import.meta.url, ['./files', destFileName]);

const compress = async () => {
  const readable = createReadStream(src);
  const writable = createWriteStream(dest);

  const gzip = createGzip();
  pipeline(readable, gzip, writable, (err) => console.error(err));
};

await compress();
