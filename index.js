const express = require('express');

// Init express
const app = express();

// Create routes
app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

// Listen on a port 5000 (for development) OR get port number in environment variable (for production)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
