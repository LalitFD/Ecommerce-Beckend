import { Cart } from "../model/cart.model.js";

export const addToCart = async (request, response, next) => {
    try {
        let { userId, productId } = request.body;
        let cart = await Cart.findOne({ userId });
        if (cart) {
            let status = cart.cartItems.some((item) => { return item.productId == productId });
            if (status) return response.status(200).json({ message: "item is already added in cart" })
            cart.cartItems.push({ productId })
            await cart.save();
            return response.status(200).json({ message: "item successfully added in cart " })
        }
        else {
            let cart = Cart.create({ userId, cartItems: [{ productId }] })
            return response.status(200).json({ message: "Item succesfully added in cart" })
        }
    } catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal server error" })
    }
}

export const fetchCart = async (request, responce, next) => {
    try {
        let { userId } = request.params;
        let cart = await Cart.findOne({ userId }).populate("cartItems.productId").populate("userId")
        return responce.status(200).json({ "cartDetails": cart })
    } catch (err) {
        console.log(err)
        return responce.status(500).json({ error: "internal server error " })
    }
}

export const deleteProduct = async (request, response, next) => {
    try {
        let { productId, userId } = request.body;
        await Cart.updateOne({ userId }, { $pull: { cartItems: { productId } } });
        return response.status(200).json({ message: "Product removed from cart successfully" });
    } catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal server error " })
    }

}