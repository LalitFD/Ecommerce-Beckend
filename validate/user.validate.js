import { body } from "express-validator"
export const validate = [
    body("name").notEmpty().withMessage("name is required").
        isString().withMessage("Only String is available").matches(/^[A-Za-z\s]+$/),

    body("email")
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Enter a valid email address"),

    body("contact")
        .notEmpty().withMessage("Contact number is required")
        .isMobilePhone().withMessage("Enter a valid mobile number")
        .isLength({ min: 10, max: 13 }).withMessage("Contact number must be between 10 and 13 digits"),

    body("password")
        .notEmpty().withMessage("Password is required")
        .isLength({ min: 8, max: 16 }).withMessage("Password must be between 8 and 16 characters"),
]