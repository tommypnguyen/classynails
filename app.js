require('dotenv').config()

var express    = require('express'),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");
    
    
var url = process.env.DATABASEURL || "mongodb://localhost/classy_nails"
mongoose.connect(url);
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", 'ejs');


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Classy Nails Server Has Started!");
});
