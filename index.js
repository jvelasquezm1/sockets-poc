var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.send("<div>Socket.io connected</div>");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("chat message", (msg) => {
    console.log(msg);
    io.emit("chat message", msg);
  });
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
