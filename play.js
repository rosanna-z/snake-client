const { connect } = require("./client");

console.log("Connecting ...");
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (data) {
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.stdout.write('Terminated game\n');
      process.exit();
    }

  })};

setupInput();

