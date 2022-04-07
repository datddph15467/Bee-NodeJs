import express from "express";
import asyncHandler from 'express-async-handler'
import categoryProduct from "../models/categoryProduct";
const categoryProductRouter = express.Router();

//Get all
categoryProductRouter.get("/", asyncHandler(
    async(req, res) => {
        const category = await categoryProduct.find({});
        res.json(category);
    }
));


//Get by id
categoryProductRouter.get("/:id", asyncHandler(
    async(req, res) => {
        const category = await categoryProduct.findById(req.params.id);
        if (category) {
            res.json(category);
        } else {
            res.status(404);
            throw new Error("Product not Found")
        }
    }
));

categoryProductRouter.post(
    "/",
    asyncHandler(async(req, res) => {
        const {
            name,
            image,
            url
        } = req.body;

        if (orderItems && orderItems.length === 0) {
            res.status(400);
            throw new Error("No order items");
            return;
        } else {
            const categoryProduct = new categoryProduct({
                name,
                image,
                url
            });

            const creatcategoryProduct = await categoryProduct.save();
            res.status(201).json(creatcategoryProduct);
        }
    })
);

export default categoryProductRouter;