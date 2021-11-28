const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema({
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

const store = mongoose.model("store",storeSchema,"store");
module.exports=store;