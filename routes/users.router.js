const router = require("express").Router();

const service =require("../services/users.services")   


router.post("/user", service.user);
router.post("/login",service.login);

module.exports = router;
