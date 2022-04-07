import express from "express";
import asyncHandler from 'express-async-handler'
import Product from "../models/product";
const ProductRouter = express.Router();

//Get all
ProductRouter.get("/", asyncHandler(
    async(req, res) => {
        const products = await Product.find({});
        res.json(products);
    }
));


//Get by id
ProductRouter.get("/:id", asyncHandler(
    async(req, res) => {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404);
            throw new Error("Product not Found")
        }
    }
));

export default ProductRouter;