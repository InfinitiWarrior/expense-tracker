// backend/config/db.js
const mysql = require('mysql2');

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'expense_tracker',
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

module.exports = db;
