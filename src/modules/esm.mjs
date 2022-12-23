import { fileURLToPath } from 'url';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { readFile } from 'fs/promises';
import path from 'path';
import './files/c.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = fileURLToPath(new URL('.', import.meta.url));

const random = Math.random();

const getUnknownObject = async () => {
  let json;

  if (random > 0.5) {
    json = JSON.parse(
      await readFile(new URL('./files/a.json', import.meta.url))
    );
  } else {
    json = JSON.parse(
      await readFile(new URL('./files/b.json', import.meta.url))
    );
  }

  return json;
};

export const unknownObject = await getUnknownObject();

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});
