import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;


  jwt.verify(token, process.env.JWT, (err, user) => {
   
    req.user = user;
    next()
  });
};
