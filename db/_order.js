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
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
  },
});
const orderSchema = mongoose.model("order", _orderSchema);
module.exports = orderSchema;
