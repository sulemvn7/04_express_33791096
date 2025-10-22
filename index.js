// Set up Express framework
const express = require ("express");
const app = express();
const port = 3000;

// Load the route handlers
const mainRoutes = require("./routes/main");  
app.use('/', mainRoutes);

// Start the server and listen for HTTP requests
app.listen(port, 
    () => console.log(`Node server is running on port ${port}...`)); 
