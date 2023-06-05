const mongoose = require("mongoose");
const _reservationSchema = new mongoose.Schema({
  cutomerName: String,
  cutomerContact: String,
  cutomerEmail: String,
  persons: String,
  date: String,
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
  },
  timeSlot: {
    type: Schema.Types.ObjectId,
    ref: "TimeSlot",
  },
  table: {
    type: Schema.Types.ObjectId,
    ref: "Table",
  },
});
const reservationSchema = mongoose.model("reservation", _reservationSchema);
module.exports = reservationSchema;
