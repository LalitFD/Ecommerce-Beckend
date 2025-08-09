import bodyParser from "body-parser";
import express, { Router } from "express"
import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import { router } from "./router/user.router.js";
import { prouter } from "./router/product.router.js";
import { crouter } from "./router/category.router.js";
import { CCrouter } from "./router/cart.router.js";
import oRouter from "./router/order.router.js";


const app = express();


mongoose.connect(process.env.URL).then((result) => {
    app.use(express.static("public"))
    app.use(bodyParser.json())
    app.use(express.json());
    app.use(cors());
    app.use(express.urlencoded({ extended: true }));


    app.use("/", prouter)
    app.use("/", router)

    app.use("/category", crouter)
    app.use("/cart", CCrouter)

    app.use("/order", oRouter);

    app.listen(process.env.PORT, () => {
        console.log("server started")
    })
}).catch((err) => {
    console.log(err)
    console.log("connnection  failed")
})
