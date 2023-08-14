import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import {createError} from "../error.js";
import jwt from "jsonwebtoken";
export const signup = async(req,res,next)=>{
    try{
      console.log(req.body);
         const user= await User.findOne({email:req.body.email});
        if(!user){
       const salt = bcrypt.genSaltSync(10);
       const hash = bcrypt.hashSync(req.body.password, salt);
       const newUser= new User({...req.body, password:hash});
   
         const savedUser=await newUser.save();
            const token=jwt.sign({id:savedUser._id},process.env.JWT);
            res.cookie("access_token",token,{
                httpOnly:true,
            })
            .status(200)
            .json(savedUser._doc);}
        
    }catch(err){
       next(err);
    }
   };

export const signin=async(req,res,next)=>{

    try{
        const user=await User. findOne({name:req.body.name});
        if(!user) return next(createError(404,"user not found"));
        const isCorrect=await bcrypt.compare(req.body.password,user.password);
        if(!isCorrect) return next(createError(400,"Wrong credentials"));
        const token=jwt.sign({id:user._id},process.env.JWT);
       
        const {password,...others}=user._doc;
       
        res. cookie("access_token",token,{
            httpOnly:true
        }).status(200).json(others);
    }catch(err){
    next(err);
    }
    };

   export const googleAuth = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT);
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(user._doc);
    } else {
      const newUser = new User({
        ...req.body,
        fromGoogle: true,
      });
      const savedUser = await newUser.save();
      const token = jwt.sign({ id: savedUser._id }, process.env.JWT);
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(savedUser._doc);
    }
  } catch (err) {
    next(err);
  }
};
