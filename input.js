//Function needed to use handleUserInput
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// When user pressed ctrl+c, the game will exit
const handleUserInput = function (data) {
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.stdout.write('Terminated game\n');
      process.exit();
    }

  })};



module.exports = { setupInput };