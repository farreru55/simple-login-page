require('dotenv').config({ path: require('path').join(__dirname, '../.env') }); // Load .env from root

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/database'); // Import database connection

const app = express();
const port = 3000; // Force port 3000

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve Static Files (Frontend)
app.use(express.static(path.join(__dirname, '../public')));

// Endpoint Register
app.post('/register', (req, res) => {
  const { name, password } = req.body;

  const query = 'INSERT INTO users (name, password) VALUES (?, ?)';
  
  db.query(query, [name, password], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Failed to register user.' });
    } else {
      res.status(200).json({ success: true, message: 'Registration successful!' });
    }
  });
});

// Endpoint Login
app.post('/login', (req, res) => {
  const { name, password } = req.body;

  const query = 'SELECT * FROM users WHERE name = ? AND password = ?';

  db.query(query, [name, password], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Server error occurred.' });
    } else {
      if (results.length > 0) {
        const user = results[0];
        console.log("User logged in:", user); // Debugging log
        res.status(200).json({ 
          success: true, 
          message: 'Login successful!', 
          user: { id: user.id, name: user.name } 
        });
      } else {
        res.status(401).json({ success: false, message: 'Incorrect username or password.' });
      }
    }
  });
});

// Jalankan Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});