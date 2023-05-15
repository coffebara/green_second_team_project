const express = require('express');
const app = express();
const test = require('.//Router/test');
const { MongoClient, ServerApiVersion } = require('mongodb');
const { ObjectId } = require('mongodb');

app.use(express.json());
var cors = require('cors');
app.use(cors());

// const uri ="mongodb+srv://admin:1q2w3e4r@joon.seyvdep.mongodb.net/?retryWrites=true&w=majority";
const uri =
  'mongodb+srv://admin:1q2w3e4r@joon.zmizrin.mongodb.net/?retryWrites=true&w=majority';

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
    // const db = client.db('forum');
    // let result = await db.collection('comment').find().toArray();
    // console.log(result);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.use('/', test);

app.get('/comment', async (req, res) => {
  await client.connect();
  const db = client.db('Team1');
  let comment = await db
    .collection('comment')
    .find({ parents: req.query.url })
    .toArray();
  console.log(req.query.url);
  res.json(comment);
});

app.post('/commentwriting', async (req, res) => {
  if (req.content == '') {
    return res.status(500).json('빈 댓글은 작성이 불가합니다.');
  } else {
    await client.connect();
    const db = client.db('Team1');
    let comment = await db.collection('comment').insertOne(req.body);
    res.json(comment);
  }
});

app.post('/deletecomment', async (req, res) => {
  console.log(req.body);
  
  try {
    const id = req.body._id;
    if (!ObjectId.isValid(id)) {
      return res.status(400).json('잘못된 ID 형식');
    }

    await client.connect();
    let db = client.db('Team1');
    let result = await db
      .collection('comment')
      .deleteOne({ _id: new ObjectId(id) });
    console.log(result);
    res.status(200).json('삭제완료');
  } catch (error) {
    console.error(error);
    res.status(500).json('오류 발생');
  } finally {
    await client.close();
  }
});

const port = process.env.PORT || 5001; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
