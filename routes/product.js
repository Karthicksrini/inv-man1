var express = require("express");

var router = express.Router();

const {postproduct,getproduct,updateproduct,deleteproduct} = require("../module/productModule");

router.post("/postproduct",postproduct);
router.get("/getproduct",getproduct);
router.patch("/updateproduct/:id", updateproduct)
router.delete("/deleteproduct/:id", deleteproduct)


module.exports= router;