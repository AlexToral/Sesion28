"use strict";

const express = require('express');
const router = require('./controllers/router');
const app = express();
const port = 3000;

app.use(express.json()); // Use express body-parser to parse all request bodies.
app.use('/api/users', router);

app.get('/',
  (req, res) => res.send('Hello DASWorld!')
);
app.route('/home').get(
  (req, res) => res.send('DASWorld Home')
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
})
