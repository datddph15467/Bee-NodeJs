import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDatabase from "./config/mongodb";
import productRoute from "./routers/product";
import ImportData from "./DataImport";
import { errorHandler, notFound } from "./middleware/error";
import userRouter from "./routers/auth";
import categoryProductRouter from "./routers/categoryProduct";


dotenv.config();
connectDatabase();

const app = express();
//User middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

//Router,api
app.use("/api/products", productRoute)
app.use("/api/import", ImportData);
app.use("/api/users", userRouter);
app.use("/api/categorys", categoryProductRouter);
app.use(notFound)
app.use(errorHandler)


//connect db
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Sever đang được chạy ở cổng : ${PORT}`);
})