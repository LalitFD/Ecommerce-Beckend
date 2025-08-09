import express from "express"
import { register, login, userVerified, logOut, createProfile, fetchUser } from "../controller/user.controller.js";
import { validate } from "../validate/user.validate.js";

import multer from "multer";
const upload = multer({ dest: "public/profile" })
const router = express.Router();

router.post("/register", validate, register)
router.post("/login", login)
router.delete("/logout", logOut);


router.post("/verification", userVerified)
router.patch("/profile/:userId", upload.single("imageName"), createProfile);
router.get("/:userId", fetchUser)


export { router }