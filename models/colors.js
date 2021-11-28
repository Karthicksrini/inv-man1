const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const colorsSchema = new Schema({
    name:{
        type:String,
        minLength:3,
        maxLength:25,
        required:true,
    },
    status:{
        type:String,
        required:true,
    }
});

const Color = mongoose.model("colors",colorsSchema,"colors");
module.exports=Color;