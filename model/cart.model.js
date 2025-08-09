import mongoose from "mongoose";
// import {User } from "../model/user.model.js"
// import { Product } from "../model/product.model.js";

const cartSchema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    cartItems: [{
        productId: {
            type: mongoose.Types.ObjectId,
            ref: "product"
        }
    }
    ]


})

export const Cart = mongoose.model("cart", cartSchema)

