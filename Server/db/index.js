const { Pool } = require('pg');

const pool = new Pool({
  user: 'caketopiadevuser',
  host: 'localhost',
  database: 'caketopia',
  password: 'NDVY',
  port: 5432,
});

module.exports = pool;