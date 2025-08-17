require('dotenv').config();
const express = require('express');
const pool = require('./db');
const app = express();
const PORT = process.env.PORT || 3000;

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});



// Test DB connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database error:', err);
  } else {
    console.log('Database connected at:', res.rows[0]);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
