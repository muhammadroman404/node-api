const mongoose =  require('mongoose');
const _categorySchema =  new mongoose.Schema({
    name:String,
    description:String
});
const CategorySchema = mongoose.model('category',_categorySchema);
module.exports = CategorySchema;