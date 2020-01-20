const express = require('express');
const path = require('path');
const members = require('./Members');

// Init express
const app = express();

// Get all members
app.get('/api/members', (req, res) => {
  res.json(members);
});

// Set a static folder
app.use(express.static(path.join(__dirname, 'public'))); // Set public folder as static folder

// Listen on a port 5000 (for development) OR get port number in environment variable (for production)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
