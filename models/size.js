const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const sizeSchema = new Schema({
    name:{
        type:String,
        maxLength:25,
        required:true,
    },
    status:{
        type:String,
        required:true,
    }
});

const Size = mongoose.model("size",sizeSchema,"size");
module.exports=Size;