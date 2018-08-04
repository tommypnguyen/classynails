var express    = require("express");
var router     = express.Router();
var nodemailer = require("nodemailer");
var bodyParser = require("body-parser")



//root route
router.get('/', function(req, res){
    res.render("home",{page: "home"});
});

//contact route
router.get('/contact', function(req, res){
    res.render("contact", {page: "contact"});
});

//Contat Email Post Route
router.post('/contact', function(req, res) {
      var smtpTransport = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'tnazn11@gmail.com',
          pass: 'w1l4a7d8k9b10c11r12'
        }
      });
      var mailOptions = {
        from: req.body.name + '<' + req.body.email + '>',
        to: 'tnazn11@gmail.com',
        subject: 'Test',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
      };
      smtpTransport.sendMail(mailOptions, function(err,res) {
        if(err){
            return console.log(err);
        }
        console.log('Message sent: ' + res.response);
        }
      );
      res.render("contact")
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