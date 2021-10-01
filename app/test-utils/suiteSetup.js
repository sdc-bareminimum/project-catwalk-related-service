const { sequelize } = require('../database');
const server = require('../index');

// Close the entire Sequalize Connection after ALL tests
// https://stackoverflow.com/questions/60217417/jest-tests-hang-due-to-open-sequelize-connections/60267873#60267873
afterAll(() => {
  console.log('closing the server');
  sequelize.close();
  server.close();
});
