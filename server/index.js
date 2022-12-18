import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("", (req, res) => {
  res.send("hello");
});

app.get("/hello", (req, res) => {
  res.send("world"); 
});

app.listen(process.env.PORT, () => {
  console.log("OK", process.env.PORT);
});
