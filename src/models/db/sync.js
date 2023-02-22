const {db} = require('../../config');
const Sequelize = require('sequelize');
const getModels = require('./');

const dbConnection = new Sequelize(
    db.dbName,
    db.dbUsername,
    db.dbPassword,
    {
        host: db.dbHost || 'localhost',
        dialect: db.dbDialect || 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        logging: console.log,
    }
);
class Clase22460Client {
    constructor() {
      this.client = dbConnection;
    }
    connect() {
      if (!Clase22460Client.connection) {
        Clase22460Client.connection = new Promise((resolve, reject) => {
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
(async ()=>{
  try {
    const RiteWay = getModels(dbConnection);
    // console.log(RiteWay);
    console.log('Amount of Models is ', Object.keys(RiteWay).length - 2);
    console.log(RiteWay.sequelize.options);
    for (let modelName in RiteWay) {
        if (!['Sequelize', 'sequelize'].includes(modelName)) {
            // modelsToSync[modelName] = RiteWay[modelName];
            console.log(RiteWay[modelName]);
            // await RiteWay[modelName].sync();
        }
    }
    process.exit();
  } catch (error) {
      console.log(error);
  }
})()
const schemasQueries = [
    'CREATE SCHEMA IF NOT EXISTS stage',
    'CREATE SCHEMA IF NOT EXISTS auto_quoter',
];

const extensionsQueries = [
    `create extension IF NOT EXISTS postgis;`,
    `create extension IF NOT EXISTS fuzzystrmatch;`,
    `create extension IF NOT EXISTS postgis_tiger_geocoder;`,
    `create extension IF NOT EXISTS postgis_topology;`,
    //`CREATE EXTENSION IF NOT EXISTS address_standardizer;`,
    //`CREATE EXTENSION IF NOT EXISTS address_standardizer_data_us;`,
    `alter schema tiger owner to rds_superuser;`,
    `alter schema tiger_data owner to rds_superuser;`,
    `alter schema topology owner to rds_superuser;`,
    `CREATE OR REPLACE FUNCTION exec(text) returns text language plpgsql volatile AS $f$ BEGIN EXECUTE $1; RETURN $1; END; $f$;
    SELECT exec('ALTER TABLE ' || quote_ident(s.nspname) || '.' || quote_ident(s.relname) || ' OWNER TO rds_superuser;')
    FROM (
        SELECT nspname, relname
        FROM pg_class c JOIN pg_namespace n ON (c.relnamespace = n.oid) 
        WHERE nspname in ('tiger','topology') AND
        relkind IN ('r','S','v') ORDER BY relkind = 'S')
    s;`,
    `SET search_path=public,tiger;`,
    `create extension IF NOT EXISTS pgrouting;`,
    `create extension IF NOT EXISTS hstore;`
];

const preConditions = [
    `CREATE TABLE IF NOT EXISTS "public"."users" (
        "id"  SERIAL , 
        "name" VARCHAR(255) NOT NULL, 
        "last_name" VARCHAR(255) NOT NULL, 
        "username" VARCHAR(255) NOT NULL UNIQUE, 
        "password" VARCHAR(255) NOT NULL, 
        "photo" VARCHAR(255),
        "phone" VARCHAR(255),
        "token" VARCHAR(255),
        "last_activity_at" TIMESTAMP WITH TIME ZONE, 
        "enabled" BOOLEAN NOT NULL DEFAULT true,
        "company_id" INTEGER,
        "rol_id" INTEGER REFERENCES "public"."roles" ("id") ON DELETE SET NULL ON UPDATE CASCADE, 
    PRIMARY KEY ("id"));`
];

const postConditions = [
    `ALTER TABLE public.users ADD CONSTRAINT users_company_id_fkey FOREIGN KEY (company_id) REFERENCES companies(id) ON UPDATE CASCADE ON DELETE SET NULL`
]

async function syncTables() {
    let modelsToSync = {};
    console.log('Amount of Models is ', Object.keys(RiteWay).length - 2);
    // for (let schemaQuery of schemasQueries) {
    //     await RiteWay.sequelize.query(schemaQuery);
    // }

    // for (let extensionQuery of extensionsQueries) {
    //     await RiteWay.sequelize.query(extensionQuery);
    // }

    for (let modelName in RiteWay) {
        if (!['Sequelize', 'sequelize'].includes(modelName)) {
            modelsToSync[modelName] = RiteWay[modelName];
        }
    }

    while (Object.keys(modelsToSync).length > 0) {
        console.log('=========================================================')
        console.log('++++++++++++++++++++++++++++++++++++++++++ Next iteration');
        console.log('=========================================================')

        for (let modelName in modelsToSync) {
            try {
                let model = modelsToSync[modelName];
                await model.sync();
                console.log(`Synchronization of ${modelName} was succesful`);
                delete modelsToSync[modelName];
            }
            catch (error) {
                console.log(`Synchronization of ${modelName} have a error`, error.message);
            }
        }

        
        // for (let precondition of preConditions) {
        //     await RiteWay.sequelize.query(precondition);
        // }
    }

    // for (let postcondition of postConditions) {
    //     await RiteWay.sequelize.query(postcondition);
    // }
    process.exit();
}

// syncTables();