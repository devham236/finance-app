import express from "express";
import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.post("/api/v1/test", async (req, res) => {});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to database");

    server.listen(process.env.PORT, () => {
      console.log(`Server is listening on Port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
