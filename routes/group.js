var express = require("express");

var router = express.Router();

const {postgroup,getgroup,updategroup,deletegroup} = require("../module/group");

router.post("/postgroup",postgroup);
router.get("/getgroup",getgroup);
router.patch("/updategroup/:id", updategroup)
router.delete("/deletegroup/:id", deletegroup)


module.exports= router;

