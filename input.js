/* To allow the connection object to have access to the data 
coming in from the keyboard. */
let connection;

//Function needed to use handleUserInput
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// When user presses ctrl+c, the game will exit
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.stdout.write('Terminated game\n');
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === 'p') {
    connection.write('Say: Haha!');
  }
};

module.exports = { setupInput };