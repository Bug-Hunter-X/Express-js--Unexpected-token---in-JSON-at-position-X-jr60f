const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  try {
    //Simulate receiving JSON data (replace with your actual data source)
    const jsonData = '{ "name":"John Doe", "age":30, "city":"New York}
';
    const parsedData = JSON.parse(jsonData);
    res.json(parsedData);
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error('Error parsing JSON:', error);
      res.status(400).send('Invalid JSON data');
    } else {
      console.error('An unexpected error occurred:', error);
      res.status(500).send('Server error');
    }
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});