var express = require("express");
var router = express.Router();
const {check,validationResult} = require("express-validator");


const {signout,signup,signin,isSignedIn} = require("../controllers/auth");

router.post("/signup",[
    check("name").isLength({min:3}).withMessage("name must be atleat 3 characters long"),
    check("email").isEmail().withMessage("email is required"),
    check("password").isLength({min:3}).withMessage("password should be atleast 3 characters long"),
],signup);

router.post("/signin",[
    check("email").isEmail().withMessage("Email is Required"),
    check("password").isLength({min:3}).withMessage("Password field is required"),
],signin);

router.get("/signout",signout);

router.get("/testroute",isSignedIn,(req,res)=>{
    res.json(req.auth);
});

module.exports = router;