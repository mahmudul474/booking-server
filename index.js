
const  express=require ("express")
const cors=require("cors")
const app=express()
const port=process.env.PORT || 5000;



  app.get('/',(req,res)=>{
    res.send('booking app server')
  })




const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://bookingtaxi:sI4ItdmHCis9y0il@474.79d3jxt.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);




app.listen(port,(req,res)=>{
    console.log('server runnint ', port)
})