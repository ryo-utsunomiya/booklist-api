const express = require('express');
const Book = require('./lib/Book');

const app = express();

app.use(express.static(`${__dirname}/public`));

app.get('/api/', (req, res) => {
  Book.all().then((results) => {
    res.json(results);
  }).catch((error) => {
    res.status(500);
    res.json(error.message);
  });
});

app.post('/api/', (req, res) => {
  Book.create(req.data.title).then((results) => {
    res.json(results);
  }).catch((error) => {
    res.status(500);
    res.json(error.message);
  });
});

app.delete('/api/', (req, res) => {
  Book.delete(req.data.id).then((results) => {
    res.json(results);
  }).catch((error) => {
    res.status(500);
    res.json(error.message);
  });
});


app.put('/api/:id/rate/add', (req, res) => {
  Book.addRate(req.params.id).then((results) => {
    res.json(results);
  }).catch((error) => {
    res.status(500);
    res.json(error.message);
  });
});

app.put('/api/:id/rate/dec', (req, res) => {
  Book.decRate(req.params.id).then((results) => {
    res.json(results);
  }).catch((error) => {
    res.status(500);
    res.json(error.message);
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
