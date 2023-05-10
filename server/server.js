const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');


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
    const db = client.db("forum")
    let result = await db.collection('comment').find().toArray()
    console.log(result)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.use('/', require('.//Router/test'));

const port = 5000; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

