const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
