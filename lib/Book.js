const db = require('./db');

const Book = {
  /**
   * Get all books
   * @returns {Promise}
   */
  all() {
    return db.query('SELECT * FROM books ORDER BY rate DESC, id ASC');
  },
  /**
   * Create new book
   * @param title string
   * @returns {Promise}
   */
  create(title) {
    return db.exec('INSERT INTO books (title) VALUES(?)', [title]);
  },
  /**
   * Remove book
   * @param id
   * @returns {Promise}
   */
  remove(id) {
    return db.exec('DELETE books WHERE id = ?', [id]);
  },
  /**
   * Increment book rate
   * @param id
   * @returns {Promise}
   */
  incRate(id) {
    return db.exec('UPDATE books SET rate = rate + 1 WHERE id = ?', [id]);
  },
  /**
   * Decrement book rate
   * @param id
   * @returns {Promise}
   */
  decRate(id) {
    return db.exec('UPDATE books SET rate = rate - 1 WHERE id = ?', [id]);
  },
};

module.exports = Book;
