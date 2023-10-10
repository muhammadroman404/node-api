const _user = require("../db/_user");
const ROLES = ['ADMIN', 'CUSTOMER']; // Define the valid roles
  const isUser = async (req,res,next)=>{
    let user =  await _user.findOne({_id:req.id});
    if(user.role == 'CUSTOMER'){
      console.log(req.id)
    }
  }
  const customerMiddleware = async (req, res, next) => {
    let user =  await _user.findOne({_id:req.id});
  token = req.headers['authorization'].split(' ')[1]
    if (user.role === "CUSTOMER" && req.params.id !== req.id) {
      res.status(401).send("Unauthorized");
    } else {
      next();
    }
  };
  const permissions = {
    isUser,
    customerMiddleware
  };
  
  module.exports = permissions;