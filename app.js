var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");

var logger = require("morgan");
var constants = require("./utilities/constants");
const bodyParser = require("body-parser");
const cors = require("cors");
//MiddleWear
var authenticateHeaderMW = require("./middlewears/authenticateHeaderMW");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authRouter = require("./routes/auth");
var tasks = require("./routes/tasks");

var app = express();

// view engine setup

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

//MiddleWear
app.use(authenticateHeaderMW);

// Main Routes -> We can also define their intials here like /auth , /user,/task but our case is simple right now
app.use("/", indexRouter);
app.use("/", usersRouter);
app.use("/", authRouter);
app.use("/", tasks);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(constants.NOT_FOUND_CODE));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: "error" });
});

module.exports = app;
