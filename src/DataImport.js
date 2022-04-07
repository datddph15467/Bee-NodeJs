import express from "express";
import User from "./models/auth.js";
import users from "./data/User.js";
import Product from "./models/product.js";
import products from "./data/Product.js";
import asyncHandler from "express-async-handler";

const ImportData = express.Router();

ImportData.post(
    "/user",
    asyncHandler(async(req, res) => {
        await User.remove({});
        const importUser = await User.insertMany(users);
        res.send({ importUser });
    })
);

ImportData.post(
    "/products",
    asyncHandler(async(req, res) => {
        await Product.remove({});
        const importProducts = await Product.insertMany(products);
        res.send({ importProducts });
    })
);

export default ImportData;