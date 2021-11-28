const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productschema = new Schema({
    name:{
        type:String,
        minLength:5,
        maxLength:25,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    }, 
    price:{
        type:Number,
        required:true,
    }, 
    description:{
        type:String,
        minLength:5,
        maxLength:25,
        required:true,
    },
    brands:{
        type:String,
        required:true,
    },
    size:{
        type:String,
        required:true,
    },
    colors:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    store:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        reuqired:true,
    },

});

const product = mongoose.model("product",productschema,"product");
module.exports=product;
