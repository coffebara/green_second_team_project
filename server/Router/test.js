const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
  res.send({ test: "Hello, world!"});
});

router.get('/list', (req, res)=>{
    res.send({ test2 : "Stop talking!", test3: "Go away!"});
  });

  // router.post('/join', async (req,res)=>{
  //   try{
  //     const obj ={
  //       email:req.body.email
  //     };
  //     res.json({message:"회원가입되었습니다"});
  //   } catch (err){
  //     console.log(err)
  //   }
  // })

module.exports = router;