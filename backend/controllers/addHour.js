const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://root:EHp3wLINM3dPT6x4@db1.yr4dzh4.mongodb.net/?retryWrites=true&w=majority";
const User = require('../models/hour');


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const addHour = async (req, res)  => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const db = client.db("Timetables");
    const collection = db.collection("Customers");

    let user = new User({
      date: req.body.date,
      time: req.body.time,
      service: req.body.service,
      phoneNumber: req.body.phoneNumber,
      name: req.body.name
    });

    await collection.insertOne(user);

  } finally {
    // Ensures that the client will close when you finish/error
    client.close();
  }
}

module.exports = {addHour};