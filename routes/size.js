var express = require("express");

var router = express.Router();

const {getsize,postsize,updatesize,deletesize} = require("../module/size");

router.get("/getsize",getsize);
router.post("/postsize",postsize);
router.patch("/updatesize/:id",updatesize);
router.delete("/deletesize/:id",deletesize);


module.exports=router;