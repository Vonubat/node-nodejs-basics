const { createHash } = await import('node:crypto');
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';
import path from 'path';

const calculateHash = async () => {
  const __dirname = fileURLToPath(new URL('.', import.meta.url));
  const src = path.resolve(__dirname, './files/fileToCalculateHashFor.txt');
  const file = await readFile(src, { encoding: 'utf8' });

  const hash = createHash('sha256').update(file).digest('hex');
  console.log(hash);
};

await calculateHash();
