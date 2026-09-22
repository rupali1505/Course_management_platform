const express = require("express");
const router = express.Router();
const { registerUser, logInUser } = require("../Controller/userAuth.controller");
const {userInputValidationMiddleware} = require("../Middleware/userInputValidationMiddleware")

router.post("/register",userInputValidationMiddleware,registerUser);
router.post("/logIn",logInUser);


module.exports = router;