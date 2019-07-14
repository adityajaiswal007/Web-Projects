var express = require("express"),
    User = require("../models/user"),
    passport = require("passport"),
    router = express.Router();

router.get("/", function(req, res){
	res.render("landing");
});


//Auth route
//show register form
router.get("/register", function(req,res){
	res.render("register");
});

//hangle signup
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error",err.message);
            return res.redirect("/register");
        }
        passport.authenticate("local")(req, res, function(){
           req.flash("success","Welcome to Yelpcamp "+ user.username);
           res.redirect("/campground"); 
        });
    });
});

//login route
router.get("/login", function(req,res){
	res.render("login");
});

//handling login logic
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/campground",
        failureRedirect: "/login"
    }), function(req, res){
});

//logout route
router.get("/logout", function(req,res){
	req.logout();
    req.flash("success","Logged Out");
	res.redirect("/campground");
});

module.exports=router;