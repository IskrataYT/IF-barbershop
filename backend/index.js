const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', routes)
app.use(express.json());
app.use(express.static(path.join(__dirname, '../build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});