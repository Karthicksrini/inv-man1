var express = require("express");

var router = express.Router();

const {postcategory,getcategory,updatecategory,deletecategory} = require("../module/category");

router.post("/postcategory",postcategory);
router.get("/getcategory",getcategory);
router.patch("/updatecategory/:id", updatecategory)
router.delete("/deletecategory/:id", deletecategory)


module.exports= router;