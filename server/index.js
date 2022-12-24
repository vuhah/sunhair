import mongoose from "mongoose";
import * as dotenv from "dotenv";
import app from "./src/app.js";
import cors from "cors";

dotenv.config();

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://admin:admin123@cluster0.xp0n2bl.mongodb.net/sunhair?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("connected MongooDB"))
  .catch((err) => console.log(err));

app.options("*", cors());

app.listen(process.env.PORT, () => {
  console.log("OK", process.env.PORT);
});
