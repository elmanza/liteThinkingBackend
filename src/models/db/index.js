const { initializeModels } = require("./models");
module.exports = dbClient => initializeModels(dbClient);