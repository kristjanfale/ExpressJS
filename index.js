const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

// Init express
const app = express();

// Init middleware
// app.use(logger);

// Set a static folder
app.use(express.static(path.join(__dirname, 'public'))); // Set public folder as static folder

// Members API routes
app.use('/api/members', require('./routes/api/members'));

// Listen on a port 5000 (for development) OR get port number in environment variable (for production)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
