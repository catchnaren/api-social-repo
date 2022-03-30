const app = require('./src/app');
const pool = require('./src/pool');

require('dotenv').config();

pool
  .connect({
    host: 'localhost',
    port: 5432,
    database: process.env.DATABASE_NAME,
    user: process.env.USERNAME,
    password: '',
  })
  .then(() => {
    app().listen(3005, () => {
      console.log('Listening on port 3005');
    });
  })
  .catch((err) => {
    console.error(err);
  });
