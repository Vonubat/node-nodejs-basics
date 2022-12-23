const { createHash } = await import('node:crypto');
import { getPath } from '../utils/index.js';
import { readFile } from 'fs/promises';

const fileName = 'fileToCalculateHashFor.txt';
const src = getPath(import.meta.url, ['./files', fileName]);

const calculateHash = async () => {
  const file = await readFile(src);
  const hash = createHash('sha256').update(file).digest('hex');

  console.log(hash);
};

await calculateHash();
