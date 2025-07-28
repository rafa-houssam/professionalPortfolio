
import { MongoClient,Db, ServerApiVersion } from 'mongodb';
let cachedClient:MongoClient|null=null
let cachedDb:Db|null=null
// rafadev433:o647L2CQfAfDPwJc
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export async function connectToDB(){
    if(cachedClient && cachedDb){
        return{client:cachedClient,db:cachedDb}
    }

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.xf5e4li.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

cachedClient=client
cachedDb=client.db("mongodbVSCodePlaygroundDB")
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    return {client,db:client.db("mongodbVSCodePlaygroundDB")}
 
}
    // mongodb+srv://rafadev433:o647L2CQfAfDPwJc@cluster0.xf5e4li.mongodb.net/