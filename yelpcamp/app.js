var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    seedDB     = require("./seeds"),
    camp       = require("./models/campground"),
    Comment    = require("./models/comment"),
    passport   = require("passport"),
    LocalStrategy =require("passport-local"),
    User       = require("./models/user"),
    flash = require("connect-flash"),
    methodOverride = require("method-override"),
    mongoose   = require("mongoose");

var commentRoutes = require("./routes/comment"),
  	campgroundRoutes = require("./routes/campground"),
  	authRoutes = require("./routes/index");
    
//mongoose.connect("mongodb://localhost/yelpcamp");
mongoose.connect("mongodb://mrfab:007@ds119049.mlab.com:19049/yelpcamp1");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+"/public"));
app.use(methodOverride("_method"));
app.use(flash());
//seedDB();

//passport configuration
app.use(require("express-session")({
	secret: "first secret",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
	res.locals.user=req.user;
    res.locals.error=req.flash("error");
    res.locals.success=req.flash("success");
	next();
});

app.use("/campground/:id/comments",commentRoutes);
app.use("/campground",campgroundRoutes);
app.use("/",authRoutes);


app.listen(3000,function(){
	console.log("Server has started on 3000");
});