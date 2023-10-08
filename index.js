const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || '8080';

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// TODO
// 1. Add pug
// Change to rendering with pug
// Create a basic page with pug image
// Create routes with about
