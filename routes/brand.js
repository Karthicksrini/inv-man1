var express = require("express");

var router = express.Router();

const {postbrand,getbrand,updatebrand,deletebrand} = require("../module/brandModule");

router.post("/postbrand",postbrand);
router.get("/getbrand",getbrand);
router.patch("/updatebrand/:id", updatebrand)
router.delete("/deletebrand/:id", deletebrand)


module.exports= router;