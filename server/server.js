const express = require('express');
const app = express();
const test = require('.//Router/test');
const { MongoClient, ServerApiVersion } = require('mongodb');

app.use(express.json());
var cors = require('cors')
app.use(cors());

const uri =
  'mongodb+srv://admin:1q2w3e4r@joon.seyvdep.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
    const db = client.db('forum');
    let result = await db.collection('comment').find().toArray();
    console.log(result);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.use('/', test);

app.get('/data', (req, res) => {
  const server1 = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
  ];
  res.json(server1);
});

app.get('/comment', async(req,res)=>{
  await client.connect();
  const db = client.db('forum');
  let comment = await db.collection('comment').find().toArray();
  res.json(comment);
});

const port = process.env.PORT || 5000; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
