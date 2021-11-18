const net = require("net");
const { port, IP, name } = require('./constants');
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: port// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (message) => {
    console.log(`The server responded ${message}`);
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });
  conn.on("connect", () => {
    console.log("Move: up");
  });
  conn.write(`Name: ${name}`);
  return conn;
};

module.exports = connect;