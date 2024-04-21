const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://s224093772:jdU7qe7z5oAGyDDL@cluster0.swbbxsk.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

async function disconnectToDatabase() {
  try {
    await client.close();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error disconnecting from MongoDB:", error);
  }
}

async function addCards(fn, ln, e, p) {
  const myDB = client.db("Test");
  const myColl = myDB.collection("FormDetails");

  const result = await myColl.insertOne({
    firstName: fn,
    lastName: ln,
    email: e,
    password: p,
  });

  console.log(`A document was inserted with the _id: ${result.insertedId}`);
}

module.exports = { connectToDatabase, disconnectToDatabase, addCards };

