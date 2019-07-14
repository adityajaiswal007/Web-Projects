var mongoose = require("mongoose"),
		camp = require("./models/campground"),
	 comment = require("./models/comment");

var data = [
	{
		name:"hello",
		image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2224781/2018/1/10/11515571584540-Mast--Harbour-Women-Mustard-Printed-Round-Neck-T-shirt-3141515571584299-1.jpg",
		description:"blah blah blah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blah"
    },
    {
		name:"hello",
		image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2224781/2018/1/10/11515571584540-Mast--Harbour-Women-Mustard-Printed-Round-Neck-T-shirt-3141515571584299-1.jpg",
		description:"blah blah"
    },
    {
		name:"hello",
		image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2224781/2018/1/10/11515571584540-Mast--Harbour-Women-Mustard-Printed-Round-Neck-T-shirt-3141515571584299-1.jpg",
		description:"blah blah"
    }
]

function seedDB(){
	//remove all campground
	camp.remove({},function(error){
	//	if(error){
	//		console.log(error);
	//	} 
	//	console.log("removed campground");
	//	//add a campgound
	//	data.forEach(function(seed){
	//		camp.create(seed, function(err, campground){
	//			if(err){
	//				console.log(err);
	//			} else {
	//				console.log("added")
	//				//create a comment
	//				comment.create(
	//					{
	//						text:"lol lol lol",
	//						author: "me"
	//					}, function(err, comment){
	//						if(err){
	//							console.log(err);
	//						} else {
	//							campground.comment.push(comment);
	//							campground.save();
	//							console.log("comment cretede");
	//						}
	//					}
	//				);
	//			}
	//		});
	//	});
	});
}

module.exports = seedDB;