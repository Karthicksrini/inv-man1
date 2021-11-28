const Color = require("../models/colors");


exports.postcolors= async(req,res,next)=>{
    //Object created using model
    const colors = new Color ({
        name:req.body.name,
        status:req.body.status
    })
    
    //save() function to post data
    var response = await colors.save();
    res.send(response);

}

exports.getcolors=async(req,res,next)=>{
        var response= await Color.find();
        res.send(response);
    }

exports.updatecolors= async (req,res,next)=>{
    const id = req.params.id
    var response = await Color.findByIdAndUpdate(id,
        { name:req.body.name,
        status:req.body.status
    })
    res.send(response);

}


exports.deletecolors=async(req,res,next)=>{
    var response= await Color.findByIdAndRemove(req.params.id);
    res.send(response);
}
