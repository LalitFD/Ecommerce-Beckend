import { request, response } from "express";
import { Product } from "../model/product.model.js";
import query from "express-validator"

export const product = async (request, response, next) => {
    try {
        let productList = request.body;

        let prod = await Product.insertMany(productList);

        return response.status(201).json({ message: "All products saved successfully", prod });
    } catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal server error" });
    }
};


export const getAllProduct = async (request, response, next) => {
    try {
        let produ = await Product.find();
        return response.status(200).json({ message: produ })
    } catch (err) {
        console.log(err);
        return response.status(500).json({ error: "internal server error " })
    }
}

 export const getById = async (req, res) => {
    try {

        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.json({ message: product });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
};

export const delById = async (request, response, next) => {
    try {
        let id = request.body._id;
        console.log(id)
        // findByIdAndDelete
        let del = await Product.findByIdAndDelete(id)
        return response.status(200).json({ message: "delete success", del })
    } catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal server error" })
    }
}

export const searchProduct = async (requesr, response, next) => {
    try {
        let { title, minPrice, maxPrice } = requesr.query;
        let query = {};


        if (title) {
            query.title = { $regex: title, $options: 'i' };
        }

        if (minPrice || maxPrice) {
            query.price = {};

            if (minPrice) {
                query.price.$gte = minPrice;
            }

            if (maxPrice) {
                query.price.$lte = maxPrice;
            }
        }
        const result = await Product.find(query);
        return response.status(200).json({ searchResult: result });

    } catch (err) {
        console.log(err)
        return response.status(500).json({ error: "internal server error" })
    }
}