const mongoose =  require('mongoose');
const Schema = mongoose.Schema
const _menuSchema = new mongoose.Schema({
  name: String,
  description: String,
  costPrice: Number,
  salePrice: Number,
  image: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});
const MenuSchema = mongoose.model('menu',_menuSchema);
module.exports = MenuSchema;