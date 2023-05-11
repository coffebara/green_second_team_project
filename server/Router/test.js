const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
  res.send("안녕하세요");
});

router.get('/list', (req, res)=>{
  return res.send("제발되어라");
});

module.exports = router;