const Size = require("../models/size");

exports.postsize= async(req,res,next)=>{
    //Object created using model
    const size = new Size ({
        name:req.body.name,
        status:req.body.status
    })
    
    //save() function to post data
    var response = await size.save();
    res.send(response);

}

exports.getsize=async(req,res,next)=>{
        var response= await Size.find();
        res.send(response);
    }

exports.updatesize= async (req,res,next)=>{
    const id = req.params.id
    var response = await Size.findByIdAndUpdate(id,
        { name:req.body.name,
        status:req.body.status

    })
    res.send(response);

}


exports.deletesize=async(req,res,next)=>{
    var response= await Size.findByIdAndRemove(req.params.id);
    res.send(response);
}


