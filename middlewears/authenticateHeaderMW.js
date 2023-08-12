const jwt = require("jsonwebtoken");
const { extractToken } = require("../utilities/helper");

const publicApiEndPoints = [
  "/list-tasks",
  "/create-task",
  "/register",
  "/login",
  "/bulk-delete-task",
];
module.exports = (req, res, next) => {
  if (!publicApiEndPoints.includes(req.path)) {
    const token =
      req.body.token ||
      req.query.token ||
      req.headers["x-access-token"] ||
      req.headers["authorization"];
    const newToken = extractToken(token);
    if (!newToken) {
      return res.status(403).send("A token is required for authentication");
    }
    try {
      const decoded = jwt.verify(newToken, process.env.SECRET);
    } catch (err) {
      return res.status(401).send("Invalid Token");
    }
    return next();
  } else {
    return next();
  }
};
