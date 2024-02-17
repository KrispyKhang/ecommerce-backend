require("dotenv").config();

// Require the sequelize model
const Sequelize = require("sequelize");

// Create connection to our database, pass in your MySQL information for username and password
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: "localhost",
      dialect: "mysql",
      dialectOptions: {
        decimalNumbers: true,
      },
    });

// expoort the sequelize instnace  to use in other modules
module.exports = sequelize;
