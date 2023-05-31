const mongoose =  require('mongoose');
const _menuSchema = new mongoose.Schema({
  costPrice: Number,
  quantity: Number,
  salePrice: Number,
  menu: [{
    type: Schema.Types.ObjectId,
    ref: "Menu",
  }],
  order: [{
    type: Schema.Types.ObjectId,
    ref: "Menu",
  }],
});
const MenuSchema = mongoose.model('menu',_menuSchema);
module.exports = MenuSchema;