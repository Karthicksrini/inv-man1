const Store = require("../models/store");

exports.poststore= async(req,res,next)=>{
    //Object created using model
    const store = new Store ({
        name:req.body.name,
        status:req.body.status,
    })
    
    //save() function to post data
    var response = await store.save();
    res.send(response);

}

exports.getstore=async(req,res,next)=>{
        var response= await Store.find();
        res.send(response);
    }

exports.updatestore= async (req,res,next)=>{
    const id = req.params.id
    var response = await Store.findByIdAndUpdate(id,
        { name:req.body.name,
          status:req.body.status,

    })
    res.send(response);

}


exports.deletestore=async(req,res,next)=>{
    var response= await Store.findByIdAndRemove(req.params.id);
    res.send(response);
}