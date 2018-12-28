const Sequelize = require('sequelize')

const sequelize = new Sequelize('express', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});
//test connect database
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
module.exports = sequelize;