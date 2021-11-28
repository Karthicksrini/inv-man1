const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brandSchema = new Schema({
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

const brand = mongoose.model("brand",brandSchema,"brand");
module.exports=brand;