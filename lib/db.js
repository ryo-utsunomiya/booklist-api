const mysql = require('mysql');
const config = require('../config/database.json');

/**
 * @returns {Connection}
 */
function db() {
  const c = mysql.createConnection(config);
  c.connect();
  return c;
}

module.exports = db;
