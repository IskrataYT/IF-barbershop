const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://root:EHp3wLINM3dPT6x4@db1.yr4dzh4.mongodb.net/?retryWrites=true&w=majority";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const fetchTimes = async (req, res)  => {
    try {
    console.log("fethcTimes called")
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      const db = client.db("Timetables");
      const collection = db.collection("Customers");
        console.log(req.body.date);
      // Define your query criteria
      const query = { date: req.body.date }; // use date from request body
  
      // Find documents that match the query
      const cursor = collection.find(query);
  
      // Fetch all matching documents
      const documents = await cursor.toArray();
  
      // Extract the times from the documents
      const times = documents.map(doc => doc.time);
      console.log(times);
  
      // Send the times back to the client
      res.json(times);
  
    } finally {
      // Ensures that the client will close when you finish/error
      client.close();
    }
  }

module.exports = {fetchTimes};