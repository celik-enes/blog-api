const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "blog_db",
  password: "753951",
  port: 5432,
});

module.exports = pool;
