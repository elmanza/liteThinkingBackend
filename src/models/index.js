const dbClient = require("../config/database/sequelize");
const generateDatabaseModels = require("./db");
module.exports = generateDatabaseModels(dbClient);