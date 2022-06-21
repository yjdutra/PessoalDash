const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Bills = require("../models/Bills");
const Banks = require("../models/Banks");

const connection = new Sequelize(dbConfig);

Bills.init(connection);
Banks.init(connection);

module.exports = connection;

//listem on: http://localhost:3333/
