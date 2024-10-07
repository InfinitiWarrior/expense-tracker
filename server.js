const express = require('express');
const { Pool } = require('pg'); // Import the PostgreSQL client
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize the app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create a connection pool to PostgreSQL
const pool = new Pool({
    host: 'localhost', // or your PostgreSQL host
    user: 'postgres', // your actual PostgreSQL username
    password: 'postgres', // your actual PostgreSQL password
    database: 'expense_tracker', // your actual PostgreSQL database name
    port: 5432, // Default PostgreSQL port
});


// Test the connection
pool.connect((err) => {
    if (err) throw err;
    console.log('Connected to PostgreSQL database');
});

// API Routes
// 1. Signup Route
app.post('/signup', (req, res) => {
    const { username, password, email } = req.body;

    // Check if the username or email already exists
    const query = 'SELECT * FROM users WHERE username = $1 OR email = $2';
    pool.query(query, [username, email], (err, result) => {
        if (err) throw err;
        if (result.rows.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) throw err;

            // Insert user into the database
            const insertQuery = 'INSERT INTO users (username, password, email) VALUES ($1, $2, $3)';
            pool.query(insertQuery, [username, hash, email], (err, result) => {
                if (err) throw err;
                res.status(201).json({ message: 'User registered successfully' });
            });
        });
    });
});

// 2. Login Route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if user exists
    const query = 'SELECT * FROM users WHERE username = $1';
    pool.query(query, [username], (err, result) => {
        if (err) throw err;
        if (result.rows.length === 0) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Compare the password
        const user = result.rows[0];
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid username or password' });
            }

            // Generate a token
            const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
            res.json({ token });
        });
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

