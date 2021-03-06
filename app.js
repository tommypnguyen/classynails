require('dotenv').config()

var express    = require('express'),
    app        = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    nodemailer = require("nodemailer"),
    mongoose   = require("mongoose");


//requiring routes
var indexRoutes= require("./routes/index");


var url = process.env.DATABASEURL || "mongodb://localhost:27017/classy_nails"
mongoose.connect(url, { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", 'ejs');
app.use(express.static(__dirname + "/public"));




app.use("/", indexRoutes);


app.listen(5000, function(){
    console.log("The Classy Nails Server Has Started!");
});
