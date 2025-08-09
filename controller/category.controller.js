import { category } from "../model/category.model.js"

export const categoryy = async (request, response, next) => {
    try {
        let cate = request.body;
        let cat = await category.insertMany(cate)
        return response.status(200).json({
            message: "category added successfully",
            data: cat
        })

    } catch (err) {
        console.log(err)
        return response.status(500).json({ error: "internal server error " })
    }
}


export const getAllCategory = async (request, response, next) => {
    try {
        let cat = await category.find();
        return response.status(200).json({
            message: "all categories",
            data: cat
        })
    } catch (err) {
        console.log(err)
        return response.status(500).json({ error: "internal server error " })
    }
}