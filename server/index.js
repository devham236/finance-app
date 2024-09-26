const express = require("express");
const cors = require("cors");
const http = require("http");
const { auth, googleProvider } = require("./firebase/firebaseConfig");

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "test" });
});

server.listen(8000, () => {
  console.log("Server is listening on Port: 8000");
});
