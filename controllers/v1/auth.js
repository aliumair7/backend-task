const constants = require("../../utilities/constants");
const bcrypt = require("bcrypt");
var db = require("../../models/index");
const jwt = require("jsonwebtoken");
const UserService = require("../../services/user");
const ErrorResponse = require("../../utilities/ErrorResponse");

const { user } = db;

const registerUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    /*Validation Check -> If user already present give error   */
    const findUser = await user.findOne({ where: { email } });
    if (findUser)
      throw new ErrorResponse(constants.ERROR_CODE, "User already Exists", {});

    //save user in db
    const newUser = await user.create({
      email,
      password: bcrypt.hashSync(password, bcrypt.genSaltSync()),
    });

    return res.status(constants.OK_CODE).send({
      user: await user.findOne({
        where: { email },
        attributes: ["id", "email"],
      }),
    });
  } catch (error) {
    return res.status(constants.ERROR_CODE).send(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const findUser = await UserService.findUser({ email });

    const isPasswordMatch = bcrypt.compareSync(password, findUser.password);
    if (!isPasswordMatch)
      throw new ErrorResponse(
        constants.ERROR_CODE,
        "Email or password doest not match",
        {}
      );

    const token = jwt.sign({ id: findUser?.id }, process.env.SECRET, {
      expiresIn: "7d",
    });

    return res.status(constants.OK_CODE).send({
      jwt: token,
    });
  } catch (error) {
    return res.status(constants.ERROR_CODE).send(error);
  }
};

module.exports = {
  registerUser,
  login,
};
