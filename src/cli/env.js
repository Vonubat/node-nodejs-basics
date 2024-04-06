const PREFIX = 'RSS_';

const parseEnv = () => {
  const envVars = Object.entries(process.env);
  const rssVars = envVars.filter((env) => env[0].startsWith(PREFIX));
  const output = rssVars.map((value) => value.join('=')).join('; ');
  console.log(output);
};

parseEnv();
