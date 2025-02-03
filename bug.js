const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//Uncommon error: Unexpected token } in JSON at position X
//This error occurs when parsing JSON data sent as a response. The problem is often related to a malformed JSON response from a third-party API, a database query returning invalid JSON, or incorrectly formatted JSON data within the application itself.