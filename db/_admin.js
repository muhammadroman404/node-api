const mongoose =  require('mongoose');
const _adminSchema =  new mongoose.Schema({
    name:String,
    address:String,
    password:String,
    contact:String,
    email:String
});
const AdminSchema = mongoose.model('admin',_adminSchema);
module.exports = AdminSchema;