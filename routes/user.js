var express = require("express");

var router = express.Router();

const {signup,login,getuser} = require("../module/user");


router.post("/signup",signup);
router.post("/login",login)
router.get("/getuser",getuser)

module.exports= router;


