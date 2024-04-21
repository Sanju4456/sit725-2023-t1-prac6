const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', function(req, res) {
    // Construct the full path to the index.html file
    const filePath = path.join(__dirname,  'index.html');
  });

router.post("/", async function(req, res) {
  try {
    await addCards(req.body.first_name, req.body.last_name, req.body.email, req.body.password);
    res.status(201).send("Data inserted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while inserting data");
  }
});

router.get('/api/FormDetails', (req, res) => {
  const inputData = {
    message: 'This is the input data you requested',
    data: req.query // Assuming input data is passed as query parameters
  };
  res.json(inputData);
});

module.exports = router;
