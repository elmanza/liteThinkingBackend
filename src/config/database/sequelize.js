const Sequelize = require("sequelize");

const { config, db } = require("../");

const app = new Sequelize(
    db.dbName,
    db.dbUsername,
    db.dbPassword,
    {
        host:db.dbHost,
        dialect:db.dbDialect,
        timezone: '-05:00',
        pool:{
            max: 100,
            min: 50,
            acquire: 60000,
            idle: 20000
        },
        logging: false
    }
)

class DbClient {
    constructor() {
      this.client = app;
    }
    connect() {
      if (!DbClient.connection) {
        DbClient.connection = new Promise((resolve, reject) => {
          if (!this.client) {
            console.log('We have a problem with the connection, please check your env');
            reject('Error');
          }
          console.log('Connected succesfully to Sequalize');
          resolve(this.client);
        });
      }
      return this.client;
    }
  }

  module.exports = new DbClient().connect();