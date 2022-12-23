const parseEnv = () => {
  const envVars = Object.entries(process.env);
  const rssVars = envVars.filter((env) => env[0].startsWith('RSS_'));
  const output = rssVars.map((value) => value.join('=')).join('; ');
  console.log(output);
};

parseEnv();
