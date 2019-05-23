var mongoose = require("mongoose");


var appointmentSchema = new mongoose.Schema({
   name: String,
   email: String,
   procedure: String,
   technician: String,
   time: String,
   date: String
});

module.exports = mongoose.model("Appointment", appointmentSchema);