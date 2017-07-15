const db = require('./db');

const Book = {
  all() {
    return db.query('SELECT * FROM books ORDER BY rate DESC, id ASC');
  },
  create(title) {
    return db.exec('INSERT INTO books (title) VALUES(?)', [title]);
  },
  remove(id) {
    return db.exec('DELETE books WHERE id = ?', [id]);
  },
  addRate(id) {
    return db.exec('UPDATE books SET rate = rate + 1 WHERE id = ?', [id]);
  },
  decRate(id) {
    return db.exec('UPDATE books SET rate = rate - 1 WHERE id = ?', [id]);
  },
};

module.exports = Book;
