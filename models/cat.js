const { addCards } = require("./mongodb"); // Importing the addCards function from your MongoDB module

// Handle POST request to add new card data
async function addCard(req, res) {
  const { first_name, last_name, email, password } = req.body;

  try {
    // Call the addCards function to insert data into MongoDB
    await addCards(first_name, last_name, email, password);
    res.status(201).send("Data inserted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while inserting data");
  }
}

// Handle GET request to retrieve form details
function getFormDetails(req, res) {
  const inputData = {
    message: 'This is the input data you requested',
    data: req.query // Assuming input data is passed as query parameters
  };
  res.json(inputData);
}

module.exports = { addCard, getFormDetails };
