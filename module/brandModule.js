const Brand = require("../models/brand");

exports.postbrand= async(req,res,next)=>{
    //Object created using model
    const brand = new Brand ({
        name:req.body.name,
        status:req.body.status,
    })
    
    //save() function to post data
    var response = await brand.save();
    res.send(response);

}

exports.getbrand=async(req,res,next)=>{
        var response= await Brand.find();
        res.send(response);
    }

exports.updatebrand= async (req,res,next)=>{
    const id = req.params.id
    var response = await Brand.findByIdAndUpdate(id,
        { name:req.body.name,
          status:req.body.status,

    })
    res.send(response);

}

exports.deletebrand=async(req,res,next)=>{
    var response= await Brand.findByIdAndRemove(req.params.id);
    res.send(response);
}