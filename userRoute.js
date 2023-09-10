const express = require("express");
const { registerUser,authUser, allUsers } = require("../controllers/userContoller");
const { protect } = require("../middleware/authMIddleware");


const router = express.Router();


router.route("/").get(protect, allUsers);
 router.post("/",  registerUser);
 router.post("/login", authUser)


module.exports = router;