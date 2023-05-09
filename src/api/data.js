// express와 mongoose 모듈을 불러옵니다.
const express = require('express');
const mongoose = require('mongoose');

// express 애플리케이션을 생성합니다.
const app = express();

// MongoDB와 연결합니다.
mongoose.connect('mongodb+srv://admin:1q2w3e4r@joon.seyvdep.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 스키마를 정의합니다.
const dataSchema = new mongoose.Schema({
  _id : String,
  content: String,
  parent : String,
  author : String,
});

// 모델을 생성합니다.
const Data = mongoose.model('Data', dataSchema);

// GET /api/data 엔드포인트를 생성합니다.
app.get('/api/data', (req, res) => {
  Data.find((err, data) => {
    if (err) return console.error(err);
    res.send(data);
  });
});

// 3000번 포트로 서버를 실행합니다.
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});