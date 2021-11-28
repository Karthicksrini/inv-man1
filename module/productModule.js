const Product = require("../models/Product");

exports.postproduct= async(req,res,next)=>{
    //Object created using model
    const product = new Product({
        name:req.body.name,
        price:req.body.price,
        quantity:req.body.quantity,
        description:req.body.description,
        brands:req.body.brands,
        colors:req.body.colors,
        size:req.body.size,
        category:req.body.category,
        store:req.body.store,
        status:req.body.status,
    })
    
    //save() function to post data
    var response = await product.save();
    res.send(response);

}

exports.getproduct=async(req,res,next)=>{
    var response= await Product.find();
    res.send(response);
}

exports.updateproduct= async (req,res,next)=>{
    const id = req.params.id
    var response = await Product.findByIdAndUpdate(id,
        {   name:req.body.name,
            price:req.body.price,
            quantity:req.body.quantity,
            description:req.body.description,
            brands:req.body.brands,
            colors:req.body.colors,
            size:req.body.size,
            category:req.body.category,
            store:req.body.store,
            status:req.body.status,

    })
    res.send(response);

}

exports.deleteproduct=async(req,res,next)=>{
    var response= await Product.findByIdAndRemove(req.params.id);
    res.send(response);
}