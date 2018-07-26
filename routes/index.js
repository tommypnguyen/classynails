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

//service route
router.get('/service', function(req, res){
    res.render("services",{page:"service"});
});

//Image route
router.get('/work', function(req, res){
    res.render("work", {page:"work"});
});

module.exports= router;