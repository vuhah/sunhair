import express from "express";
import api from "./routes/api.js";
import fileupload from "express-fileupload"

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileupload())

app.get("/hello",(req,res)=>{
    res.send("hellp")
})

app.use("/api", api);

export default app;  
     