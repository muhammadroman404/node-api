const mongoose = require("mongoose");
const _feedbackSchema = new mongoose.Schema({
  cutomerName: String,
  cutomerContact: String,
  cutomerEmail: String,
  cutomerAddress: String,
  description: String,
  date: String,
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
  },
});
const feedbackSchema = mongoose.model("feedback", _feedbackSchema);
module.exports = feedbackSchema;
