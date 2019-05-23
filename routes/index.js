var express    = require("express");
var router     = express.Router();
var nodemailer = require("nodemailer");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var Appointment = require("../models/appointment");



//root route
router.get('/', function(req, res){
    res.render("home", {page:'home'});
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

router.post('/appointment', function(req, res){
    //get data from form 
    var newAppointment= new Appointment({
        name: req.body.name,
        email:     req.body.email,
        procedure: req.body.procedure,
        technician: req.body.technician,
        time: req.body.time,
        date: req.body.date
    });
    Appointment.create(newAppointment, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else{
            //redirect back to appointments page
            console.log(newlyCreated);
            res.redirect('/appointment');
        }
    })
    
})

router.get('/appointment', function(req,res){
    var date = new Date();
    var utcDate = new Date(date.toUTCString());
    utcDate.setHours(utcDate.getHours()-7);
    var usDate = new Date(utcDate);
    var day = usDate.getDay();
    var viewDate = usDate.toLocaleDateString("en-US",{weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
    //create a today
    var today = new Date(utcDate);
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 
    today = yyyy+'-'+mm+'-'+dd;
     Appointment.find({}, function(err, allAppointments){
           if(err){
               console.log(err);
           } else {
            //   console.log(today)
               res.render("appointment" ,{appointments:allAppointments, page:'appointment', day: day, date: viewDate, currentDate: today});
           }
        });
})




module.exports= router;