const mongoose = require("mongoose");
const _feedbackSchema = new mongoose.Schema({
  cutomerName: String,
  cutomerContact: String,
  cutomerEmail: String,
  cutomerAddress: String,
  description: String,
  date: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
const feedbackSchema = mongoose.model("feedback", _feedbackSchema);
module.exports = feedbackSchema;
