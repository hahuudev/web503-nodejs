import mongoose from "mongoose";

const Product = new mongoose.Schema({
    name: { type: String, require: true },
    price: { type: Number, require: true },
    description: { type: String },
    status: { type: Boolean },
    quality: { type: Number },
});

const ProductModel = mongoose.model('Products', Product)

export default ProductModel