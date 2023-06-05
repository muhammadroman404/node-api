const mongoose =  require('mongoose');
const _orderDetailSchema = new mongoose.Schema({
  costPrice: Number,
  quantity: Number,
  salePrice: Number,
  menu: {
    type: Schema.Types.ObjectId,
    ref: "Menu",
  },
  order: {
    type: Schema.Types.ObjectId,
    ref: "Order",
  },
});
const OrderDetailSchema = mongoose.model('orderDetail',_orderDetailSchema);
module.exports = OrderDetailSchema;