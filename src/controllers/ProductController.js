import ProductModel from "~/models/product.model";

export const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.find({});
        res.status(200).json({ message: "Success", length: products.length, products });
        
    } catch (error) {
        res.status(500).json({message: 'Internal server'})
    }
};

export const getProductById = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id);
        res.status(200).json({ message: "Success", product });
        
    } catch (error) {
        res.status(500).json({message: 'Internal server'})
    }
};

export const getProduct = async (req, res) => {
    try {
        const query = req.query;
        const product = await ProductModel.findOne(query);
        res.status(200).json({ message: "Success", product });
    } catch (error) {}
};

export const newProduct = async (req, res) => {
    try {
        const NewProduct = new ProductModel(req.body);
        const newProduct = await NewProduct.save();
        res.status(200).json({ message: "New product sucsses", newProduct });
    } catch (error) {
        console.log(error);
    }
};

export const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await ProductModel.findByIdAndUpdate(id, req.body);
        res.status(200).json({ message: "Update product sucsses", result });
    } catch (error) {
        console.log(error);
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await ProductModel.findByIdAndDelete(id);
        res.status(200).json({ message: "Delete product sucsses", result });
    } catch (error) {
        console.log(error);
    }
};
