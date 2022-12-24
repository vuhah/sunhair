import express from "express";
import api from "./routes/api.js";
import fileupload from "express-fileupload"

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    next()
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileupload())

app.get("/hello",(req,res)=>{
    res.send("hellp")
})



app.use("/api", api);

export default app;  
     