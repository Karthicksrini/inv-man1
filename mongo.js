exports.connect=()=>{
    try{
        const mongoose= require("mongoose");
        mongoose.connect(
    `mongodb+srv://guvi:guvi123@cluster0.4fx3w.mongodb.net/Inventary_Management`,
        {useNewUrlParser:true}
        );

        console.log("mongodb connected...")
        
    }catch(err){
        console.warn(err);
        process.exit();
    }
}


