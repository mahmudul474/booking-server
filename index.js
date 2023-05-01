
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

 
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
});




async function run() {
  try {
    

    
    const carcollection=client.db("taxi-booking").collection("cars")
    const ordercollection=client.db("taxi-booking").collection("orders")



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


  app.post("/order", async(req,res)=>{
    const order=req.body
    const result=await ordercollection.insertOne(order)
    res.send(result)
  })
  

   app.get("/order", async(req,res)=>{
    const result=await ordercollection.find({}).toArray()
    res.send(result)

   })






    
  } finally {
  
  }
}
run().catch(console.dir);




app.listen(port,(req,res)=>{
    console.log('server runnint ', port)
})