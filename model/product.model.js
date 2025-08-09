import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    category: String,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    weight: Number,
    dimension: {
        width: Number,
        height: Number,
        depth: Number
    },
    brand: String,
    warrantyInformation: String,
    shippingInformation: String,
    availabilityStatus: String,
    returnPolicy: String,
    thumbnail: String,

    reviews: [
        {
            rating: Number,
            comment: String,
            date: String,
            reviewName: String,
            reviewEmail: String
        }
    ]


})
export const Product = mongoose.model("product", productSchema);
