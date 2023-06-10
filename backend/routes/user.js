const express = require("express");
const userRouter = express.Router();
const { createUser, loginUser } = require("../controllers/user");

userRouter.route("/new").post(createUser);
userRouter.route("/").post(loginUser);

module.exports = userRouter;
