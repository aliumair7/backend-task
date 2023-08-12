require("dotenv").config({
  path: `${process.cwd()}/.env`,
});

module.exports = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT,
    host: process.env.DATABASE_HOST,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 60000,
      idle: 10000,
    },
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  test: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT,
    host: process.env.DATABASE_HOST,
    dialect: "postgres",
    pool: {
      max: 30,
      min: 0,
      acquire: 60000,
      idle: 5000,
    },
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT,
    host: process.env.DATABASE_HOST,
    dialect: "postgres",
    // omitNull: true,
    pool: {
      max: 5,
      min: 0,
      acquire: 60000,
      idle: 10000,
    },
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
};
