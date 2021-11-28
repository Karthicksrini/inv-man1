var express = require("express");

var router = express.Router();

const {poststore,getstore,updatestore,deletestore} = require("../module/store");

router.post("/poststore",poststore);
router.get("/getstore",getstore);
router.patch("/updatestore/:id", updatestore)
router.delete("/deletestore/:id", deletestore)


module.exports= router;