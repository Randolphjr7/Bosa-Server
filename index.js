const express = require("express");
// a node js module to deal with file paths
const path = require("path");
const logger = require('./middleware/logger');

// the variable we named "app" has a bunch of methods and properties
const app = express();

// Initialize middleware
// app.use(logger);

// Body Parse Middleware
app.use(express.json());
// Handle Form Submissions
app.use(express.urlencoded({ extended: false }));

// Set Static Folder. 'use' is the key-term for middleware
app.use(express.static(path.join(__dirname, "public")));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
