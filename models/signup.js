const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signupSchema = new Schema({
    name:{
        type:String,
        minLength:5,
        maxLength:25,
        required:true,
    },
    email:{
        type:"String",
        minLength:10,
        maxLength:20,
        required:true,
    }, 
    password:{
        type:String,
        minLength:8,
        maxLength:25,   
        required:true,
    }, 
    conpass:{
        type:String,
        minLength:8,
        maxLength:25,
        required:true,
    }
    
})

const Product = mongoose.model("signup",signupSchema,"signup");
module.exports=Product;
