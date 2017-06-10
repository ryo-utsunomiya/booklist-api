const db = require('./db');

const Book = {
  all() {
    return new Promise((resolve, reject) => {
      db().query('SELECT * FROM books', (error, results) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  },
};

module.exports = Book;
