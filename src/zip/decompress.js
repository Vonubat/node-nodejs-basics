import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { getPath } from '../utils/index.js';

const srcFileName = 'archive.gz';
const src = getPath(import.meta.url, ['./files', srcFileName]);
const destFileName = 'fileToCompress.txt';
const dest = getPath(import.meta.url, ['./files', destFileName]);

const decompress = async () => {
  const readable = createReadStream(src);
  const writable = createWriteStream(dest);

  const unzip = createUnzip();
  pipeline(readable, unzip, writable, (err) => console.error(err));
};

await decompress();
