import { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";

import axios from "../api/axios";
const LOGIN_URL = "/auth";

const Login = () => {
  const { setAuth } = useAuth(); // useAuth hook을 사용하여 AuthContext에서 setAuth 가져오기

  const navigate = useNavigate(); // react-router-dom의 useNavigate hook을 사용하여 네비게이션 구현
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"; // 로그인 후 이전 페이지로 돌아가기 위한 경로

  const userRef = useRef(); // 사용자 이름 input 요소에 대한 참조
  const errRef = useRef(); // 에러 메시지 p 요소에 대한 참조

  const [user, setUser] = useState(""); // 사용자 이름 상태
  const [pwd, setPwd] = useState(""); // 비밀번호 상태
  const [errMsg, setErrMsg] = useState(""); // 에러 메시지 상태

  useEffect(() => {
    userRef.current.focus(); // 사용자 이름 input 요소에 포커스 설정
  }, []);

  useEffect(() => {
    setErrMsg(""); // user 또는 pwd 상태가 업데이트 될 때마다 에러 메시지 상태 초기화
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // 폼 제출 이벤트 방지

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      ); // axios를 사용하여 로그인 POST 요청 보내기
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken }); // AuthContext에 사용자 정보 저장
      setUser("");
      setPwd("");
      navigate(from, { replace: true }); // 로그인 후 이전 페이지로 돌아가기
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response"); // 서버 응답이 없을 때
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password"); // 사용자 이름 또는 비밀번호 누락시
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized"); // 권한이 없을 때
      } else {
        setErrMsg("Login Failed"); // 로그인 실패
      }
      errRef.current.focus(); // 에러 메시지 p 요소에 포커스 설정
    }
  };

  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
        <button>Sign In</button>
      </form>
      <p>
        Need an Account?
        <br />
        <span className="line">
          <Link to="/register">Sign Up</Link>
        </span>
      </p>
    </section>
  );
};

export default Login;
