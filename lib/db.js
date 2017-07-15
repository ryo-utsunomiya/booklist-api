const mysql = require('mysql');
const databaseConfig = require('../config/database.json');

class DB {
  constructor(config) {
    this.connection = mysql.createConnection(config);
    this.connection.connect();
  }

  query(sql) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  }

  exec(sql, values) {
    return this.query(mysql.format(sql, values));
  }
}

module.exports = new DB(databaseConfig);
