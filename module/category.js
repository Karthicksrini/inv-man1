const Category = require("../models/category");

exports.postcategory= async(req,res,next)=>{
    //Object created using model
    const category = new Category ({
        name:req.body.name,
        status:req.body.status,
    })
    
    //save() function to post data
    var response = await category.save();
    res.send(response);

}

exports.getcategory=async(req,res,next)=>{
        var response= await Category.find();
        res.send(response);
    }

exports.updatecategory= async (req,res,next)=>{
    const id = req.params.id
    var response = await Category.findByIdAndUpdate(id,
        { name:req.body.name,
          status:req.body.status,

    })
    res.send(response);

}


exports.deletecategory=async(req,res,next)=>{
    var response= await Category.findByIdAndRemove(req.params.id);
    res.send(response);
}