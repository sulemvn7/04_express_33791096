// Import express and create a router
const express = require("express");
const router = express.Router();
const path = require("path");


// Define routes

// Root route - Displays Welcome message
router.get("/", (req, res) => res.send("Hello World!"));

// About route - Displays basic information
router.get("/about", (req, res) => res.send("<h1>This is the about page</h1>"));

// Contact route - Displays contact infromation like my email address
router.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Email: awansuleman695@gmail.com</p>");
});

// Date route - Displays the current date and time
router.get("/date", (req, res) => {
  const currentDate = new Date();
  res.send(`<h1>Current Date and Time</h1><p>${currentDate}</p>`);
});

// Extension Tasks:

// Task 10 Parameterised route - displays a welcome message with the user's name
router.get("/welcome/:name", (req, res) => {
  const userName = req.params.name; // Extract the name from the URL
  res.send(`<h1>Welcome, ${userName}!</h1><p>Nice to meet you!</p>`);
});

// 🆕 Task 11 Chained route
router.get("/chain", 
  // First handler
  (req, res, next) => {
    console.log("First handler executed");
    req.customMessage = "This message was set in the first handler.";
    next(); // Pass control to the next handler
  }, 
  // Second handler
  (req, res) => {
    res.send(`<h1>Chained Route Example</h1>
              <p>${req.customMessage}</p>
              <p>This is the second handler!</p>`);
  }
);

// 🆕 Task 12 File route - serve a.html file
router.get("/file", (req, res) => {
  res.sendFile(path.join(__dirname, "../Task 12 Extension/a.html")); //Sends HTML file as a response
});


// Export the router so index.js can use it
module.exports = router;
