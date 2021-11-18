const port = 50541;
const IP = 'localhost';
const name = 'SMP';
const commandObj = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
  h: "Say: HI",
  g: "Say: GTG",
  b: "Say: BYE"
};
module.exports = {
  port,
  IP,
  name,
  commandObj,
};