import mongoose from "mongoose";
import bcrypt from "bcryptjs"
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        // name: hello lalit
        // get: (value) => {
        //     return "hello" + value;
        // }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        set: (value) => {
            console.log("setter executed...");
            let saltKey = bcrypt.genSaltSync(12);
            value = bcrypt.hashSync(value, saltKey);
            return value;
        }
    },
    contact: {
        type: String,
        required: true,
        trim: true,
        isNumeric: true
    },
    profile: {
        imageName: String,
        address: String
    }
    , isVarify: {
        type: Boolean,
        default: false
    }
}, { toJSON: { getters: true } }, { versionKey: false })

export const User = mongoose.model("user", userSchema)