const parseArgs = () => {
  const cliArgs = process.argv;
  const parsedArgs = [];

  for (let i = 0; i < cliArgs.length; i++) {
    const isFlag = cliArgs[i].startsWith('--');
    if (isFlag) {
      const arg = `${cliArgs[i].slice(2)} is ${cliArgs[i + 1]}`;
      parsedArgs.push(arg);
      i++;
    }
  }

  console.log(parsedArgs.join(', '));
};

parseArgs();
