const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // serve HTML and assets

// Handle form submission
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Form submitted:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);
  res.send('<h1>Thank you for contacting me!</h1><p><a href="index.html">Go back</a></p>');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
