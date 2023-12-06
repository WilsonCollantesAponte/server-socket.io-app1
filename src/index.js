const { Server } = require("socket.io");
const { createServer } = require("node:http");
const express = require("express");
const morgan = require("morgan");

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ es: "es-es" });
});

io.on("connection", (socket) => {
  socket.emit("hello", "word");
});

module.exports = server;
