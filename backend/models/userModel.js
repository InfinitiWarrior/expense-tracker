const db = require('../config/db');

const User = {
  findByUsername: (username) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM users WHERE username = ?', [username], (err, result) => {
        if (err) reject(err);
        resolve(result[0]);
      });
    });
  },
  
  create: (username, hashedPassword) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
};

module.exports = User;
