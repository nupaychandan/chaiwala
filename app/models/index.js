const Sequelize = require("sequelize");
const sequelize = new Sequelize("rikarena_sm", "rikarena_sm", "SM@1234@rik@", {
    host: "198.38.83.200",
    dialect: "mssql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
        
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
