const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const axios = require('axios').default;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

// app.get('/', (req, res) => {
//   res.status(200).send();
//   res.end();
// });

let port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});