var camp = require("../models/campground"),
	Comment = require("../models/comment"),
	middlewareObj = {};

middlewareObj.isLoggedIn=function (req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	req.flash("error","Please Login First");
	res.redirect("/login");
};

middlewareObj.commentAuthority=function (req,res,next){
	if(req.isAuthenticated()){
		Comment.findById(req.params.comment_id,function(err,editComment){
			if(err){
				res.redirect("back");
			} else {
				if(editComment.author.id.equals(req.user._id)){
					next();
				} else {
					res.redirect("back");
				}
			}
		});
	} else {
		res.redirect("back");
	}
};

middlewareObj.campAuthority=function (req,res,next){
	if(req.isAuthenticated()){
		camp.findById(req.params.id,function(err,editCamp){
			if(err){
				res.redirect("back");
			} else {
				if(editCamp.author.id.equals(req.user._id)){
					next();
				} else {
					req.flash("error","You don't have Permission");
					res.redirect("back");
				}
			}
		});
	}
};

module.exports = middlewareObj;
