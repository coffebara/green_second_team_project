import { useEffect, useState } from 'react';
import '../../styles/reference.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function Comment() {
  let state = useSelector((state) => state);

  // 서버용
  const [comment, setComment] = useState([]);

  const commentClick = () => {
    axios
      .get('http://localhost:5000/comment')
      .then((res) => setComment(res.data))
      .catch((err) => console.log(err));
  };

  const comment_btn = () => {
    if (state.login.isLogin === false) {
      console.log(window.location.href);
    } else {
      axios
        .post('http://localhost:5000/commentwriting', {
          name: 'name',
          parents: window.location.href,
          date: 'date',
          good: 'good',
          content: '안녕하세요',
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="reference_comment">
      <div>
        <button onClick={commentClick}>Get Data</button>
        <ul>
          {comment.map((item) => (
            <li key={item._id}>
              작성자 : {item.author} <br /> 댓글 내용 : {item.content}
            </li>
          ))}
        </ul>
      </div>

      <hr />
      <div className="reference_comment_list">
        <div className="comment_writer">박철준</div>
        <div className="comment_content">
          이게 뭔 소리죠? 잘 이해가 안가는군요.
        </div>
        <div className="comment_date">2013.05.11 14:35</div>
      </div>
      <form>
        <hr />
        <div className="reference_comment_writing">
          <input
            className="reference_comment_textbox"
            type="text"
            placeholder="로그인 후 이용해주세요."
            name="content"
          />
          <button
            className="reference_comment_btn"
            onClick={(e) => {
              e.preventDefault();
              comment_btn();
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
