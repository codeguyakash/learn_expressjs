const Router = require("express");
const { user } = require("../controller/user.controller");

const router = Router();
router.get("/user", user);

module.exports = router;
