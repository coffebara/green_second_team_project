import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item._id}>
            <p>{item.name}</p>
            <p>{item.age}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App2;