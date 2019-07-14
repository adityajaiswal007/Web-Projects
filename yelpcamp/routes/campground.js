var express = require("express"),
	camp = require("../models/campground"),
	middlewareObj = require("../middleware"),
    router = express.Router();

router.get("/", function(req, res){
	camp.find({}, function(err, allCampgrounds){
       if(err){
           console.log(err);
       } else {
          res.render("campgrounds/index",{camp:allCampgrounds,user:req.user});
       }
    });
});

router.post("/",function(req, res){
	var name = req.body.name;
	var image = req.body.image;
	var description = req.body.description;
	var author = {
		id:req.user._id,
		username:req.user.username
	}
	var newCampground = {name: name, image: image, description:description,author:author};
	camp.create(newCampground, function(error, addnew){
		if(error){
			console.log(error);
		}else{
            res.redirect("/campground");
		}
	});
});

//new form route
router.get("/new",middlewareObj.isLoggedIn, function(req, res){
    res.render("campgrounds/new");
});

//show route
router.get("/:id",function(req, res){
//	camp.findById(req.params.id,function(error, showCamp){
	camp.findById(req.params.id).populate("comment").exec(function(error, showCamp){
		if(error){
			res.redirect("campgrounds/index");
		} else {
			res.render("campgrounds/show",{showCamp:showCamp});
		}
	});
});

//edit route
router.get("/:id/edit",middlewareObj.campAuthority,function(req,res){
	camp.findById(req.params.id,function(err,editCamp){
		if(err){
			res.redirect("/campground");
		} else {
			res.render("campgrounds/edit",{editCamp:editCamp});
		}
	});
});
//update route
router.put("/:id",middlewareObj.campAuthority,function(req,res){
	camp.findByIdAndUpdate(req.params.id,req.body.edit,function(err,updateCamp){
		if(err){
			res.redirect("/campground");
		} else {
			res.redirect("/campground/"+req.params.id);
		}
	});
});

//delete route
router.delete("/:id",middlewareObj.campAuthority,function(req,res){
	camp.findByIdAndRemove(req.params.id,function(err,deleteCamp){
		if(err){
			res.redirect("/campground");
		} else{
			res.redirect("/campground");
		}
	});
});

module.exports=router;