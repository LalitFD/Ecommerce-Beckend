import express from "express"
import { save } from "../controller/order.controller.js";

const oRouter = express.Router();

oRouter.post("/save", save)
export default oRouter;