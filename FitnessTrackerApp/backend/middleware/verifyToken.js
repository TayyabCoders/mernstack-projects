const jwt  = require('jsonwebtoken');
// import { createError } from "../error.js";

const verifyToken = async (req, res, next) => {
  try {

    if (!req.headers.authorization) {
      return next((401, "You are not authenticated!"));
    }

    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
        return next((401, "You are not authenticated"));
    }

    const decode = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decode;
    return next();
  } catch (err) {
    next(err);
  }
};
module.exports = {verifyToken}