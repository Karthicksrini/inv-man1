const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name:{
        type:String,
        minLength:3,
        maxLength:25,
        required:true,
    },
    status:{
        type:String,
        required:true,
    }, 

});

const company = mongoose.model("category",categorySchema,"category");
module.exports=company;