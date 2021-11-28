var express = require("express");

var router = express.Router();

const {postSignup} = require("../module/signup");

router.post("/postSignup",postSignup);


module.exports= router;