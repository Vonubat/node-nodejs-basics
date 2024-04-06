import { Transform, pipeline } from 'stream';
import { stdin, stdout } from 'process';

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split('').reverse().join(''));
    },
  });

  pipeline(stdin, reverse, stdout, (err) => console.error(err));
};

await transform();
