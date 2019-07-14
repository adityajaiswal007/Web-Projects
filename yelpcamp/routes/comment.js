var express = require("express"),
	camp = require("../models/campground"),
	Comment = require("../models/comment"),
	middlewareObj = require("../middleware"),
    router = express.Router({mergeParams:true});

//comment route
router.get("/new",middlewareObj.isLoggedIn, function(req,res){
	camp.findById(req.params.id, function(err, addComment){
		if(err){
			console.log(err);
		} else {
			res.render("comments/new",{addComment:addComment});
		}
	})	
});

router.post("/", middlewareObj.isLoggedIn, function(req, res){
	//lookup campground using id
	camp.findById(req.params.id, function(err, campground){
		if(err){
			console.log(err);
			res.redirect("/campground");
		} else {
			Comment.create(req.body.comment,function(err, comment){
				if(err){
					console.log(err);
				} else {
					//add username and id
					comment.author.id=req.user._id;
					comment.author.username=req.user.username;
					//save comment
					comment.save();			
					campground.comment.push(comment);
					campground.save();
					req.flash("success","Successfully Updated");
					res.redirect('/campground/' +campground._id);
				}
			});
		}
	});
});

//edit comment
router.get("/:comment_id/edit",middlewareObj.commentAuthority,function(req,res){
	Comment.findById(req.params.comment_id,function(err,editComment){
		if(err){
			res.redirect("back");
		} else {
			res.render("comments/edit",{camp_id:req.params.id,editComment:editComment});
		}
	});
});
//update comment
router.put("/:comment_id",middlewareObj.commentAuthority,function(req,res){
	Comment.findByIdAndUpdate(req.params.comment_id,req.body.comment,function(err,updateComment){
		if(err){
			res.redirect("back");
		} else {
			req.flash("success","Successfully Updated");
			res.redirect("/campground/"+req.params.id);
		}
	});
});

//delete comment
router.delete("/:comment_id",middlewareObj.commentAuthority,function(req,res){
	Comment.findByIdAndRemove(req.params.comment_id,function(err){
		if(err){
			res.redirect("back");
		} else {
			req.flash("success","Comment Deleted");
			res.redirect("/campground/"+req.params.id);
		}
	});
});

module.exports=router;