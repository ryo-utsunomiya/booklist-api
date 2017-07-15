const { express, response } = require('express');
const Book = require('./lib/Book');

const app = express();

app.use(express.static(`${__dirname}/public`));

/**
 * @param promise {Promise}
 */
const handlePromise = (promise) => {
  promise.then((results) => {
    response.json(results);
  }).catch((error) => {
    response.status(500);
    response.json(error.message);
  });
};

app.get('/api/', () => handlePromise(Book.all()));
app.post('/api/', req => handlePromise(Book.create(req.data.title)));
app.delete('/api/', req => handlePromise(Book.delete(req.data.id)));
app.put('/api/:id/rate/inc', req => handlePromise(Book.incRate(req.params.id)));
app.put('/api/:id/rate/dec', req => handlePromise(Book.decRate(req.params.id)));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
