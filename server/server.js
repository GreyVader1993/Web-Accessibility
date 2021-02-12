const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pa11y = require('pa11y');
// const html = require('pa11y-reporter-html');
const json = require('pa11y-reporter-json');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  text = req.body.post;
  pa11y(text).then(results => {
    // Returns a string with the results formatted as JSON
    const jsonResults = json.results(results);
    const jsonString = JSON.stringify(results);
    // fs.writeFileSync('./client/src/data/results.json', jsonString)
    // console.log(jsonString);
    res.send(jsonString);
    res.end();
  });
  // pa11y(text).then(async results => {
  //     // Returns a string with the results formatted as HTML
  //     const htmlResults = await html.results(results);
  //     fs.writeFileSync('./client/src/data/results.html', htmlResults)
  //     console.log(htmlResults);
  // });
  // res.end(`Parsed data belonging to ${req.body.post}`);
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
