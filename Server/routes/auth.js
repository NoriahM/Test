const express = require("express");
const User =require("../models/user");

const authRouter=express.Router();

authRouter.post("/api/signup" ,async(req,res)=>{
    try{
    const {email, name, password} = req.body;      


    const existingUser = await User.findone({email});
    if (existingUser){
     res.status(400).json({ msg: "User with the same email already esists"})
    }

    let user = new User({
        email,
        password,
        name,
    })
    user = await user.save();
    res.json(user);
    }
    catch(e){
        res.status(500).json({error : e.message})
    }
})

module.exports=authRouter;