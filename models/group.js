const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
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

const group = mongoose.model("group",groupSchema,"group");
module.exports=group;