require('dotenv').config();
const { sequelize } = require('./index');

describe('Model Connection', () => {
  it('should connect', (done) => {
    sequelize
      .query('SELECT NOW()')
      .then((res) => {})
      .catch((err) => err)
      .then((middleware) => {
        if (middleware) {
          console.log(`Connection String: ${process.env.DATABASE_URL}`);
        }
        return middleware;
      })
      .then(done);
  });
});
