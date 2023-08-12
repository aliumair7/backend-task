var db = require("../models/index");
const ErrorResponse = require("../utilities/ErrorResponse");
const constants = require("../utilities/constants");
const { user } = db;

const findUser = async (parameter) => {
  const findUser = await user.findOne({
    where: parameter,
  });

  if (!findUser)
    throw new ErrorResponse(constants.ERROR_CODE, "User not found", {});

  return findUser;
};

module.exports = { findUser };
