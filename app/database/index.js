// const Pool = require('pg-pool');
const { Sequelize } = require('sequelize');
const { Pool } = require('pg');
const dbConfig = require('../../config/db.config');
const modelInitializer = require('./models/init-models');

if (!dbConfig.password) {
  throw new Error('MISSING database configuration settings!');
}

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  },
);

const models = modelInitializer.initModels(sequelize);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const modelNames = Object.keys(models);
modelNames.forEach((modelKey) => {
  db[modelKey] = models[modelKey];
});

module.exports = db;
