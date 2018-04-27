require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
  origin: 'https://dragon-picnic.herokuapp.com',
  originSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.options('*', cors());

app.use('/', routes);

const port = 3001;

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

module.exports = app;
