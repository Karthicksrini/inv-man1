const Login = require("../models/login");

exports.postlogin= async(req,res,next)=>{
    //Object created using model
    const login = new Login ({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        conpassword:req.body.conpassword
    });
    //check email exists
    const user = await login.find({email:req.body.email});
    if(!user)return res.status(400).send({error:"User does not exists"});
    
   
    //Genarate Token

    // Athlete.find({ 'sport': 'Tennis' }, 'name age', function (err, athletes) {
    
    //     if (err) return handleError(err);
        // 'athletes' contains the list of athletes that match the criteria.
     // })
    //save() function to post data
    var response = await login.save();
    res.send(response);

}

