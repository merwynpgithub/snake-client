const { commandObj } = require('./constants');
// setup interface to handle user input from stdin
let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function (key) {
  // your code here
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
  const keyArray = Object.keys(commandObj);
  const commandArray = Object.values(commandObj);
  let index = keyArray.indexOf(key);
  if (index > -1) {
    connection.write(commandArray[index]);
  }
};
module.exports = setupInput;