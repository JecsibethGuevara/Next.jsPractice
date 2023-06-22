import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://ROOT:8CdpGb2A0XrmMmge@cluster0.mln3ck0.mongodb.net/";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
serverApi: {
version: ServerApiVersion.v1,
strict: true,
deprecationErrors: true,
}
});


let clientPromise

if(process.env.NODE_ENV !== 'production'){
    if(!global._mongoClientPromise){
        global._mongoClientPromise = client.connect()
    }

    clientPromise = global._mongoClientPromise
   
} else{
    clientPromise = client.connect()
}


export default clientPromise

// async function run() {
// try {
// // Connect the client to the server	(optional starting in v4.7)
// await client.connect();
// // Send a ping to confirm a successful connection
// await client.db("admin").command({ ping: 1 });
// console.log("Pinged your deployment. You successfully connected to MongoDB!");
// } finally {
// // Ensures that the client will close when you finish/error
// await client.close();
// }
// }
// run().catch(console.dir);