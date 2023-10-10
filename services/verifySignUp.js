const _user = require("../db/_user");
const ROLES = ['ADMIN', 'CUSTOMER']; // Define the valid roles
const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    try {
      const existingUserByUsername = await _user.findOne({ userName: req.body.userName });
      if (existingUserByUsername) {
        return res.status(400).json({ message: "Failed! Username is already in use!" });
      }
  
      const existingUserByEmail = await _user.findOne({ email: req.body.email });
      if (existingUserByEmail) {
        return res.status(400).json({ message: "Failed! Email is already in use!" });
      }
  
      next();
    } catch (error) {
      return res.status(500).json({ message: error.message || "An error occurred." });
    }
  };
  
 

  const checkRolesExisted = (req, res, next) => {
    if (req.body.role) {
        if (!ROLES.includes(req.body.role)) {
            return res.status(400).json({
              message: `Failed! Role ${req.body.role} does not exist!`
            });
          }
    }
  
    next();
  };
  const verifySignUp = {
    checkDuplicateUsernameOrEmail,
    checkRolesExisted
  };
  
  module.exports = verifySignUp;