import { test } from "../models/testModel.js";
import fs from "fs";

export const upload = async (req, res) => {
  console.log(Object.values(req.files));
  console.log(req.body);
  // const base64 = req.files.userPicture.data.toString("base64")

  // res.send(base64);
  // fs.readFile('./src/assets/test/0.png', (err,data)=>{
  //   if (err) throw err;
  //   res.send(data.toString('base64'))
  // })
  // fs.unlink(`./src/assets/test/home.png`, (err,data)=>{
  //   if (err) throw err;
  //   res.send('deelte ok')
  // })
  for (const file of Object.values(req.files)) {
    fs.writeFileSync(`./src/assets/test/${file.name}`, file.name, file.data);
  }

  res.send("OK");
};

export const retrieve = async (req, res) => {};
