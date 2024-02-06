const express = require('express');

const app = express();
const port = 3000;

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Hello, World! This is the home page.');
});

// Define a route for the "/about" path
app.get('/about', (req, res) => {
  res.send('Welcome to the about page.');
});

// Handle 404 - Page Not Found
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
