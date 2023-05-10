const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
  res.send({ test: "Hello, world!"});
});

module.exports = router;