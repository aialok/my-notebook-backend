const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  JWT_TOKEN: process.env.JWT_TOKEN,
};
