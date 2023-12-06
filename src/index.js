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

app.post("/one", (req, res) => {
  //   const { id } = req.body;

  //   res.status(200).json({ es: id });
  res.status(200).json({ hol: "a" });
});

io.on("connection", (socket) => {
  socket.emit("hello", "word");
});

module.exports = server;
