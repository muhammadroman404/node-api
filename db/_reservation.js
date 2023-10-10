const mongoose = require("mongoose");
const _reservationSchema = new mongoose.Schema({
  userName: String,
  userContact: String,
  userEmail: String,
  persons: String,
  date: Date,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
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
