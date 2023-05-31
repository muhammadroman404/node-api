const mongoose =  require('mongoose');
const _riderSchema =  new mongoose.Schema({
    name:String,
    address:String,
    password:String,
    contact:String,
    email:String,
    bike:Boolean
});
const RiderSchema = mongoose.model('rider',_riderSchema);
module.exports = RiderSchema;