import { useEffect, useState } from 'react';
import '../../styles/reference.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

// firebase
// import { AuthContext } from "../context/AuthContext";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function Comment() {
  // 댓글 텍스트용
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // 현재 날짜 생성
  var now = new Date();
  var year = ('' + now.getFullYear()).slice(-2);
  var month = ('0' + (now.getMonth() + 1)).slice(-2);
  var day = ('0' + now.getDate()).slice(-2);
  var hours = ('0' + now.getHours()).slice(-2);
  var minutes = ('0' + now.getMinutes()).slice(-2);
  // "yy.mm.dd hh.mm" 형식으로 포맷팅
  var formattedDate =
    year + '.' + month + '.' + day + ' ' + hours + '.' + minutes;

  // 서버용
  let state = useSelector((state) => state);
  const [comment, setComment] = useState([]);

  // componentDidMount에서 loadComments 호출
  useEffect(() => {
    axios
      .get('http://localhost:5001/comment?url=' + window.location.href)
      .then((res) => setComment(res.data))
      .catch((err) => console.log(err));
  });

  const comment_btn = () => {
    if (state.login.isLogin === false) {
      console.log(window.location.href);
      alert("로그인 먼저 해주세요")
    } else {
      axios
        .post('http://localhost:5001/commentwriting', {
          name: name,
          parents: window.location.href,
          date: formattedDate,
          good: 'good',
          content: text,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      setText('');
    }
  };
  const deleteComment = (id) => {
    if (window.confirm('정말로 댓글을 삭제하시겠습니까?')) {
      axios
        .post('http://localhost:5001/deletecomment', { _id: id })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  //플레이스홀더
  const placeholderText = state.login.isLogin ? '' : '로그인 후 이용해주세요.';

  // 파이어베이스에서 로그인한 계정의 이름을 가져옴
  const [name, setName] = useState('');
  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setName(user.displayName);
        placeholderText = '';
      }
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);

  return (
    <div className="reference_comment">
      {comment.map((item) => (
        <div key={item._id}>
          <hr />
          <div className="reference_comment_list">
            <span
              className="comment_cancelBtn"
              onClick={() => deleteComment(item._id)}
            >
              X
            </span>
            <div className="comment_writer">{item.name}</div>
            <div className="comment_content">{item.content}</div>
            <div className="comment_date">{item.date}</div>
          </div>
        </div>
      ))}
      <form>
        <hr />
        <div className="reference_comment_writing">
          <input
            className="reference_comment_textbox"
            type="text"
            placeholder={placeholderText}
            name="content"
            value={text}
            onChange={handleChange}
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
