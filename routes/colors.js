var express = require("express");

var router = express.Router();

const {getcolors,postcolors,updatecolors,deletecolors} = require("../module/colors");


router.get("/getcolors",getcolors);
router.post("/postcolors",postcolors);
router.patch("/updatecolors/:id",updatecolors);
router.delete("/deletecolors/:id",deletecolors);



module.exports= router;