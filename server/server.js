const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const routes = require("./routes");

app.use(express.static(path.join(__dirname, "../public")));
app.use(routes);

io.on("connection", (socket) => {
  console.log("hello user");
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

http.listen(PORT, () => console.log("Running on Port " + PORT));
