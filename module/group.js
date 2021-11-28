const Group = require("../models/group");

exports.postgroup= async(req,res,next)=>{
    //Object created using model
    const group = new Group ({
        name:req.body.name,
        status:req.body.status,
    })
    
    //save() function to post data
    var response = await group.save();
    res.send(response);

}

exports.getgroup=async(req,res,next)=>{
        var response= await Group.find();
        res.send(response);
    }

exports.updategroup= async (req,res,next)=>{
    const id = req.params.id
    var response = await Group.findByIdAndUpdate(id,
        { name:req.body.name,
          status:req.body.status,

    })
    res.send(response);

}


exports.deletegroup=async(req,res,next)=>{
    var response= await Group.findByIdAndRemove(req.params.id);
    res.send(response);
}