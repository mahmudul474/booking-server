
const  express=require ("express")
const cors=require("cors")
const app=express()
const port=process.env.PORT || 5000;




app.use(cors())
app.use(express.json())

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

    
    const carcollection=client.db("taxi-booking").collection("cars")



    ///save car 

    app.post("/car", async(req, res) => {
      const car=req.body
       const result=await carcollection.insertOne(car)
       res.send(result)
    })


  app.get("/car",async(req, res) => {
    const result=await carcollection.find({}).toArray()
    res.send(result)
  })

    
  } finally {
  
  }
}
run().catch(console.dir);




app.listen(port,(req,res)=>{
    console.log('server runnint ', port)
})