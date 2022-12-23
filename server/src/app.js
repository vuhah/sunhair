import express from "express";
import cors from "cors";
import api from "./routes/api.js";
import fileupload from "express-fileupload"

const app = express();


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(fileupload())

app.use("/api", api);

export default app;  
     