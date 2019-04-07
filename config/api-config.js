const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const dbfunc = require('./db-function');


dbfunc.connectionCheck.then((data) => {
  // console.log(data);
}).catch((err) => {
  console.log(err);
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.json());

const router = express.Router();
app.use('/api', router);

// const secureApi = express.Router();

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// body parser middleware

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// index route
app.get('/', (req, res) => {
  res.send('hello world');
});

const routes = require('../app/routes/sensor.routes');

routes(app);

const ApiConfig = {
  app,
};

module.exports = ApiConfig;
