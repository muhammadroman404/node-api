const mongoose =  require('mongoose');
const _customerSchema =  new mongoose.Schema({
    name:String,
    address:String,
    password:String,
    contact:String,
    email:String
});
const CustomerSchema = mongoose.model('customer',_customerSchema);
module.exports = CustomerSchema;