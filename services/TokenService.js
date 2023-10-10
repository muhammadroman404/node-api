const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const _user = require("../db/_user");
const verifyToken = (req, res, next) => {
  let token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ message: "No token provided!" });
  }
  token = token.split(' ')[1]
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized Access!" });
    }
    req.id = decoded.id;
    next();
  });
};
const hasRole = (roles) => async (req, res, next) => {
    try {
      const user = await _user.findById(req.id);
      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }
      else{
          let isRole = roles.includes(user.role) ? true:false;
          if (!isRole) {
              return res.status(403).json({ message: `Unauthorized access!` });
        }
    }
    next();
    } catch (error) {
      return res.status(500).json({ message: error.message || "An error occurred." });
    }
  };
const authJwt = {
  verifyToken,
  hasRole,
};

module.exports = authJwt;

