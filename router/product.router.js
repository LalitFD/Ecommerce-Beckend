import express from "express"
import { getAllProduct, product, getById, delById, searchProduct } from "../controller/product.controller.js"

const prouter = express.Router()
prouter.post("/save", product);
prouter.get("/get", getAllProduct);
prouter.get("/search", searchProduct);
prouter.get("/get/:id", getById);
prouter.delete("/del", delById)

export { prouter }