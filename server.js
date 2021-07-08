'use strict';

const express = require('express');

// Constants
const PORT = 8180;
const HOST = req.hostname

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
