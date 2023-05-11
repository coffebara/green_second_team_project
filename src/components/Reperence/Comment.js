import { useEffect, useState } from 'react';
import '../../styles/reference.css';
import axios from 'axios';

export default function Comment() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('/api/data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  
  // 서버용
  const [comment, setComment] = useState([]);

  const commentClick = () => {
    axios
      .get('http://localhost:5000/comment')
      .then((res) => setComment(res.data))
      .catch((err) => console.log(err))
  };

  return (
    
    <div className="reference_comment">
      
      <div>
        <button onClick={commentClick}>Get Data</button>
        <ul>
        {comment.map(item => (
          <li key={item._id}>작성자 : {item.author} <br /> 댓글 내용 : {item.content}</li>
        ))}
      </ul>
      </div>

      <hr />
      <div className="reference_comment_list">
        <div className="comment_writer">박철준</div>
        <div className="comment_content">
          이게 뭔 소리죠? 잘 이해가 안가는군요.
        </div>
        <div className='comment_date'>2013.05.11 14:35</div>
      </div>
      <form action="">
        <hr />
        <div className="reference_comment_writing">
          <input
            className="reference_comment_textbox"
            type="text"
            placeholder="로그인 후 이용해주세요."
          />
          <button
            className="reference_comment_btn"
            onClick={() => {
              console.log(data);
            }}
          >
            댓글 작성
          </button>
        </div>
        <hr />
      </form>
    </div>
  );
}
