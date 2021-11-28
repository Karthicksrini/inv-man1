const User= require("../models/user");
const Joi= require("joi");
const bcrypt= require("bcrypt");
const jwt= require("jsonwebtoken");


exports.signup= async (req,res,next)=>{

    //User Input Validation - Joi Validation

    const schema= Joi.object({
        name:Joi.string().max(10).required(),
        email:Joi.string().min(6).max(50).email().required(),
        password:Joi.string().min(8).max(50).required()

    })

    var {error}= await schema.validate(req.body);
    if(error) return res.status(400).send({msg:error.details[0].message});

//Email already exists
var existUser = await User.findOne({"email":req.body.email}).exec();
if(existUser) return res.status(400).send({msg:"Email already exists"});

//Create / user
const salt = await bcrypt.genSalt(10);
req.body.password= await bcrypt.hash(req.body.password, salt);

const user = new User({  
name:req.body.name,
email:req.body.email,
password:req.body.password
})
var response= await user.save();
res.send(response);
}


exports.login= async(req,res,next)=>{
   
    //User Input Validation - Joi Validation
    const schema= Joi.object({
        email:Joi.string().min(6).max(50).email().required(),
        password:Joi.string().min(8).max(50).required()

    })

    var {error}= await schema.validate(req.body);
    if(error) return res.status(400).send({msg:error.details[0].message});

    //Is registered User
    var existUser= await User.findOne({"email":req.body.email}).exec();
    if(!existUser) return res.status(400).send({msg:"User does not exists"});

     //Check Password
     const isvalid= await bcrypt.compare(req.body.password,existUser.password);
     if(!isvalid)return res.status(403).send({msg:"Wrong Password..."});

    //Generate Token
    var token= jwt.sign({existUser},'SWERA', {expiresIn:"1000000h"});
    res.send(token);

}

exports.getuser=async(req,res,next)=>{
    var response= await User.find();
    res.send(response);
}