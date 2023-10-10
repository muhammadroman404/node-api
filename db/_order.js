const mongoose = require("mongoose");
const _orderSchema = new mongoose.Schema({
  orderDate: String,
  orderStatus: String,
  cutomerName: String,
  cutomerContact: String,
  cutomerEmail: String,
  cutomerAddress: String,
  orderType: String,
  paymentStatus: String,
  deliveryStatus: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
const orderSchema = mongoose.model("order", _orderSchema);
module.exports = orderSchema;
