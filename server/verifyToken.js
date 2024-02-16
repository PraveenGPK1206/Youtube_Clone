import jwt from "jsonwebtoken";
import { createError } from "./error.js";
import Cookies from 'js-cookie';
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token){
    console.log("tokenerror");
    return next(createError(401, "You are not authenticated!"));}
  

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) {
      console.log("jwt verify error");
      return next(createError(403, "Token is not valid!"));
  }
    req.user = user;
    next();
  });
};
