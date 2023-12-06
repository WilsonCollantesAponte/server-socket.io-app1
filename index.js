import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(socket.data);
  socket.emit("hello", "word");
});

io.listen(3001);
