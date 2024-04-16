const Router = require("express");
const verifyUser = require("./../middleware/auth.middleware");
const { user } = require("../controller/user.controller");

const router = Router();
// router.get("/user", user);
router.get("/user", verifyUser, user);

module.exports = router;
