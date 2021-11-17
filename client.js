const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',// IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (message) => {
    console.log(`The server responded ${message}`);
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });
  const name = "SMP";
  conn.write(`Name: ${name}`);

  return conn;
};

module.exports = connect;