const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');

// Init express
const app = express();

// Init middleware (logger)
// app.use(logger);

// Handlebars Middleware (for rendering templates)
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route. Render index file (in views folder)
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Members App',
    members
  })
);

// Set a static folder
app.use(express.static(path.join(__dirname, 'public'))); // Set public folder as static folder

// Members API routes
app.use('/api/members', require('./routes/api/members'));

// Listen on a port 5000 (for development) OR get port number in environment variable (for production)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
