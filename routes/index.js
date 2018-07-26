var express = require("express");
var router = express.Router();

//root route
router.get('/', function(req, res){
    res.render("home",{page: "home"});
});

//contact route
router.get('/contact', function(req, res){
    res.render("contact", {page: "contact"});
});


module.exports= router;