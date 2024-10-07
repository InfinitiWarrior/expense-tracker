const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const router = express.Router();

// Register user
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const userExists = await User.findByUsername(username);
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    await User.create(username, hashedPassword);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error registering user' });
  }
});

// Login user
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findByUsername(username);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, username: user.username }, 'secretKey', { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ message: 'Login failed' });
  }
});

module.exports = router;
