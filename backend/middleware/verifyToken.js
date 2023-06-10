const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    const userID = req.headers["userid"];
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (decode.userId !== userID) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to access this resource",
      });
    }
    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      res.status(401).json({ success: false, message: "Invalid token" });
    } else if (error.name === "TokenExpiredError") {
      res.status(401).json({ success: false, message: "Token expired" });
    } else {
      res.status(500).json({
        success: false,
        message: "Something went wrong! Try again...",
      });
    }
  }
};

module.exports = verifyToken;
