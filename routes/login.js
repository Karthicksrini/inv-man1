var express = require("express");

var router = express.Router();

const {postlogin} = require("../module/login");

router.post("/postlogin",postlogin);

module.exports= router;


