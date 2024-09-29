import express from "express";
import cors from "cors";
import http from "http";
import { auth, googleProvider } from "../firebase/firebaseConfig.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.post("/api/v1/test", async (req, res) => {
  const { email, password } = req.body;
  const response = await createUserWithEmailAndPassword(auth, email, password);
  console.log(response);

  res.json({
    message: `You created an account with following data: email ${email}, password ${password}`,
    body: response,
  });
});

server.listen(8000, () => {
  console.log("Server is listening on Port: 8000");
});
