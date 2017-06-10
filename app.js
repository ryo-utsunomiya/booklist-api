const express = require('express');
const Book = require('./lib/Book');

const app = express();

app.get('/', (req, res) => {
  Book.all().then((results) => {
    res.json(results);
  }).catch((error) => {
    res.status(500);
    res.json(error.message);
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
