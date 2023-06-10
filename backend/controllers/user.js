const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// create user
const createUser = async (req, res) => {
  try {
    const { name, email, password: actualPassword } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already exist!!",
      });
    }
    const hash = await bcrypt.hash(actualPassword, 10);
    const user = await User.create({
      name,
      email,
      password: hash,
    });
    const { password: userPassword, ...withoutPassword } = user._doc;
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "30d",
    });
    res.status(201).json({
      success: true,
      message: "User created Successfully",
      user: withoutPassword,
      token: token,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Something went wrong!! try again.." });
  }
};

// login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid Login Details" });
    }
    const userObj = user.toObject();
    const result = await bcrypt.compare(password, userObj.password);
    if (!result) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid Login Details" });
    }
    const { password: userPassword, ...otherThanPassword } = user._doc;
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "30d",
    });

    res.status(200).json({
      success: true,
      message: "User login successfully",
      user: otherThanPassword,
      token: token,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong!! try again.." });
  }
};

module.exports = { createUser, loginUser };
