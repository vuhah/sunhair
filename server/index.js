import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("", (req, res) => {
  res.send("hello");
});

app.get("/hello", (req,res)=>{
    res.send("world")
})
app.listen(8000, () => {
  console.log("OK");
});
