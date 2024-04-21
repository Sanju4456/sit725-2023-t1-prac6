const express = require('express');
const path = require('path');
const { addCards, connectToDatabase } = require("./database");


const app = express();
const port = 3001;
// Middleware
app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', function(req, res) {
  // Serve the index.html file
  const filePath = path.join(__dirname, 'index.html');
  res.sendFile(filePath);
});

app.post("/api/cards", async function(req, res) {
  try {
    // Add cards to the database
    await addCards(req.body.first_name, req.body.last_name, req.body.email, req.body.password);
    res.status(201).send("Data inserted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while inserting data");
  }
});

app.get('/api/formDetails', (req, res) => {
  // Return input data as JSON
  const inputData = {
    message: 'This is the input data you requested',
    data: req.query // Assuming input data is passed as query parameters
  };
  res.json(inputData);
});

// New API route for testing purposes
app.get('/api/test', (req, res) => {
  res.json({ message: 'This is a test API route for testing purposes' });
});

// Start the server
app.listen(port, async () => {
  // Connect to the database
  await connectToDatabase();
  console.log(`Server running on port ${port}`);
});

// Export the app instance (optional, but useful for testing)
module.exports = app;
