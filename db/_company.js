const mongoose =  require('mongoose');
const _companySchema =  new mongoose.Schema({
    name:String,
    address:String,
    logo:String,
    contact:String,
    email:String,
    map:String
});
const CompanySchema = mongoose.model('company',_companySchema);
module.exports = CompanySchema;