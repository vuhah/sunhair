import express from "express";
import api from "./routes/api.js";

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    next()
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api", api);

export default app;  
     