const net = require("net");

// establishes a connection with the game server

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server!")
    conn.write("Name: RZ")
    conn.write("Move: down")

      setInterval(() => {
      conn.write("Move: left");
      }, 1000) 

      setTimeout(() => {
      conn.write("Move: up");
      }, 1000);

      setInterval(() => {
        conn.write("Move: down");
        }, 1000) 
  

    conn.on("data", (data) => {
    console.log(data)
    });

  return conn;
})};

module.exports = { connect };