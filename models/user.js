const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loginSchema = new Schema({
    name:{
        type:String,
        minLength:5,
        maxLength:25
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minlength:8
    }
});

const user = mongoose.model("user",loginSchema,"user");
module.exports=user;