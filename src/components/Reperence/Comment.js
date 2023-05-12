import { useEffect, useState } from "react";
import "../../styles/reference.css";
import axios from "axios";
import { useSelector } from "react-redux";

// firebase
// import { AuthContext } from "../context/AuthContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Comment() {
  // 댓글 텍스트용
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // 현재 날짜 생성
  let nowDate = new Date();
  let koreaTime = new Date(
    nowDate.toLocaleString("en-US", { timeZone: "Asia/Seoul" })
  );

  // 서버용
  let state = useSelector((state) => state);
  const [comment, setComment] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/comment?url=" + window.location.href)
      .then((res) => setComment(res.data))
      .catch((err) => console.log(err));
  });

  const comment_btn = () => {
    if (state.login.isLogin === false) {
      console.log(window.location.href);
    } else {
      axios
        .post("http://localhost:5001/commentwriting", {
          name: name,
          parents: window.location.href,
          date: koreaTime,
          good: "good",
          content: text,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      setText("");
    }
  };
  //플레이스홀더
  const placeholderText = state.login.isLogin ? "" : "로그인 후 이용해주세요.";

  // 파이어베이스에서 로그인한 계정의 이름을 가져옴
  const [name, setName] = useState("");
  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setName(user.displayName);
        placeholderText = "";
      }
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);

  return (
    <div className="reference_comment">
      <div>
        <ul></ul>
      </div>
      {comment.map((item) => (
        <div>
          <hr />
          <div className="reference_comment_list">
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
