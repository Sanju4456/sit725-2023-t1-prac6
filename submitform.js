const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;

// MongoDB URI
const uri = "mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority";

// Create a MongoClient
const client = new MongoClient(uri);

// Connect to MongoDB
let collection;
client.connect(err => {
  if (err) {
    console.error("Error connecting to MongoDB:", err);
    return;
  }
  console.log("Connected to MongoDB");
  collection = client.db().collection('cards');
});

// Middleware
app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());

// Route to handle POST requests for adding new cards
app.post('/api/cards', async (req, res) => {
  try {
    const cardDetails = req.body;
    await collection.insertOne(cardDetails);
    res.status(201).json({ statusCode: 201, message: 'Card added successfully' });
  } catch (error) {
    console.error("Error adding card:", error);
    res.status(500).json({ statusCode: 500, message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log('Express server started');
});
const submitForm = () => {
  let formData = {
    first_name: $('#first_name').val(),
    last_name: $('#last_name').val(),
    password: $('#password').val(),
    email: $('#email').val()
  };

  $.ajax({
    url: '/api/cards',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(formData),
    success: function(response) {
      console.log('Form data submitted successfully:', response);
      // Reset the form if needed
      $('#myForm')[0].reset();
    },
    error: function(error) {
      console.error('Error submitting form data:', error);
    }
  });
};
