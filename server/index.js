import express from "express";
import cors from "cors";
import http from "http";

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.post("/api/v1/test", async (req, res) => {});

server.listen(8000, () => {
  console.log("Server is listening on Port: 8000");
});
