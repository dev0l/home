const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: './'});
});

const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});
