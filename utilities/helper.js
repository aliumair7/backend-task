const jwt = require("jsonwebtoken");

const decodeToken = (token) => {
  // const decode = jwt.decode(token, process.env.SECRET);
  var decoded = jwt.decode(token, process.env.SECRET);

  return decoded;
};

const extractToken = (tokenWithBearer) => {
  const tokenArr = tokenWithBearer && tokenWithBearer.split(" ");
  const token = tokenArr?.length && tokenArr[1];

  return token;
};
module.exports = {
  decodeToken,
  extractToken,
};
