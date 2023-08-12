const constants = require("../../utilities/constants");
var db = require("../../models/index");

const { decodeToken, extractToken } = require("../../utilities/helper");

const { user } = db;

const getUser = async (req, res, next) => {
  try {
    const token = extractToken(req.header("authorization"));
    const { id } = decodeToken(token) || {};
    // Find all users
    const getUser = await user.findOne({
      where: { id },
      attributes: ["id", "email"],
    });
    res.status(constants.OK_CODE).send({ user: getUser });
  } catch (error) {
    return res.status(constants.ERROR_CODE).send(error);
  }
};

module.exports = {
  getUser,
};
