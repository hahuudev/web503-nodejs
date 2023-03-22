import express from "express";
import {
    getAllProducts,
    newProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getProductById,
} from "~/controllers/ProductController";
import { ProductValidate } from "~/validators/product.validate";

const router = express.Router();

router.route("/:id").get(getProductById).put(ProductValidate, updateProduct).delete(deleteProduct);
router.route("/get-one").get(getProduct);
router.route("/").get(getAllProducts).post(ProductValidate, newProduct);

export default router;
