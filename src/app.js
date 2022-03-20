import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";

import productRoute from "./routers/product";


const app = express();
//User middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

//Router
app.use("/api", productRoute);

//connect db
mongoose.connect("mongodb://localhost:27017/Bee")
    .then(() => console.log("Connect db sucessfully"))
    .catch(error => console.log(error))

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Sever đang được chạy ở cổng : ${PORT}`);
})