const express = require('express');
const app = express();
const axios = require('axios').default;

app.use(express.json());

app.listen(3000);