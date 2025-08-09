import express from "express"
import { addToCart, deleteProduct, fetchCart } from "../controller/cart.controller.js";

const CCrouter = express.Router();
CCrouter.post("/Add-to-cart", addToCart)
CCrouter.get("/:userId", fetchCart)

CCrouter.delete("/delete", deleteProduct)

export { CCrouter };
