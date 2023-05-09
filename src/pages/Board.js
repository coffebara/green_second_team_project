import React, { useState, useEffect } from 'react';

function MongoData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // MongoDB에서 데이터 불러오기
    fetch('mongodb+srv://admin:1q2w3e4r@joon.seyvdep.mongodb.net/?retryWrites=true&w=majority')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <ul>
      {data.map(item => (
        <li key={item._id}>{item.content}</li>
      ))}
    </ul>
  );
}

export default MongoData;