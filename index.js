// Server Variables
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

// Catch all routes
app.use('/', (req, res) => {
  res.sendFile(__dirname + '/public/views/index.html');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Serving app');
});
