const path = require('path');
const express = require('express');
const app = express();
const axios = require('axios').default;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(router);

let port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});