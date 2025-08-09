import mongoose from "mongoose";

const categoryProduct = new mongoose.Schema({

    name: String,
    slug: String,
    URL: String
})

export const category = mongoose.model("category", categoryProduct);
