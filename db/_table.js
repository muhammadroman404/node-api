const mongoose =  require('mongoose');
const _tableSchema =  new mongoose.Schema({
    table:String,
    description:String,
});
const TableSchema = mongoose.model('table',_tableSchema);
module.exports = TableSchema;