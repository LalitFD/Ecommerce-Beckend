import express from "express"
import { categoryy,getAllCategory} from "../controller/category.controller.js";

const crouter = express();

crouter.post("/cate", categoryy)
crouter.get("/get", getAllCategory);

export {crouter};

