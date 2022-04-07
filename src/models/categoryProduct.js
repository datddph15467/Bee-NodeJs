import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
const categoryProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
});
const categoryProduct = mongoose.model("CategoryProduct", categoryProductSchema);

export default categoryProduct;