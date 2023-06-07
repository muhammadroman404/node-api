const mongodb = require('mongodb');
require('./config')
require('./server')
const admin = require('./db/_company')
const category = require('./db/_category')
const menu = require('./db/_menu')

const save = async ()=>{
    let catId = await category.findOne({name:'this is a category'});
    catId = catId._id.valueOf();
    console.log('id',catId)
    let data =  new admin({
        name:'company name',
        map:'google location',
       address:'company address',
        logo:'this is a logo',
        contact:'123456y6',
        email:'company@test.com'

    })
       const result = await data.save();
  // _admin = await _admin.toArray() 
    console.log(result);
}
// save()