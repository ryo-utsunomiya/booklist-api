const db = require('./db');

const Book = {
  all() {
    return new Promise((resolve, reject) => {
      db().query('SELECT * FROM books ORDER BY rate DESC, id ASC', (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  },
  create(title) {
    return new Promise((resolve, reject) => {
      // todo: SQL Injection!
      const query = `INSERT INTO books (title) VALUES(${title})`;
      db().query(query, (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  },
  addRate(id) {
    return new Promise((resolve, reject) => {
      // todo: SQL Injection!
      const query = `UPDATE books SET rate = rate + 1 WHERE id = ${id}`;
      db().query(query, (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  },
  decRate(id) {
    return new Promise((resolve, reject) => {
      // todo: SQL Injection!
      const query = `UPDATE books SET rate = rate - 1 WHERE id = ${id}`;
      db().query(query, (error, results) => {
        if (error) reject(error);
        else resolve(results);
      });
    });
  },
};

module.exports = Book;
