const Product = require("../models/signup");

exports.postSignup= async(req,res,next)=>{
    //Object created using model
    const product = new Product({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        conpass:req.body.conpass,
    })

    //check email exists
    const user = await login.find({email:req.body.email});
    if(user)return res.status(400).send({error:"User already exists"});

    //Generate Salt and hash
    const salt = await bcrypt.genSalt();
    
    //save() function to post data
    var response = await product.save();
    res.send(response);

}

const service={

    async user  (req,res){
      try{
        //Request Body Validation
       let {error, value} = await registerSchema.validate(req.body);
       console.log(error);
       if(error) 
       return res.status(400).send({
         error:"Validation failed",
         message:error.details[0].message,
        });
  
         
    
          //check email exists
       user = await db.users.findOne({email:value.email});
          
          if(user)return res.status(400).send({error:"User already exists"});
  
          //Generate Salt & hash
          const salt = await bcrypt.genSalt();
          value.password = await bcrypt.hash(req.body.password, salt);
  
          //Insert User
          await db.users.insertOne(value);
          res.send({message:"User registered successfully;"})
  
      }
        catch(err){
          console.log("Error Registering User-", err)
          res.sendStatus(500);
        }
    },
  
     async login(req,res){
      try{
        //Data Validation
        let {error, value} = await loginSchema.validate(req.body);
        console.log(error);
        if(error) 
        return res.status(400).send({
          error:"Validation failed",
          message:error.details[0].message,
         });
   
  
  
        //Check Email exists
        const user = await db.users.findOne({email:value.email});
        if(!user)return res.status(400).send({error:"User does notn exists"});
  
        //Check password
        const isValid = await bcrypt.compare(value.password,user.password);
        if(!isValid)return res.status(403).send({error:"Wrong Password..."});
        
  
        //Generate Token
        const authToken = jwt.sign(
          {userId:user._id, email: user.email},
          "guvi@123");
          
        res.send({authToken})
  
  
  
       }
       catch(err){
           console.log("Error Login User - ", err)
         res.sendStatus(500);
       }
    }
  }
  
  
  module.exports= service;