import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../api/axios";
import { Link } from "react-router-dom";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";

const Register = () => {
  const userRef = useRef(); // 입력란의 포커스를 설정하기 위한 useRef 객체 생성
  const errRef = useRef(); // 오류 메시지 출력란의 포커스를 설정하기 위한 useRef 객체 생성

  const [user, setUser] = useState(""); // 사용자 이름을 저장하는 state 변수 생성
  const [validName, setValidName] = useState(false); // 사용자 이름이 유효한지 여부를 저장하는 state 변수 생성
  const [userFocus, setUserFocus] = useState(false); // 사용자 이름 입력란에 포커스가 있는지 여부를 저장하는 state 변수 생성

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState(""); // 비밀번호 확인란에 입력된 값 저장하는 state 변수 생성
  const [validMatch, setValidMatch] = useState(false); // 비밀번호와 비밀번호 확인 값이 일치하는지 여부를 저장하는 state 변수 생성
  const [matchFocus, setMatchFocus] = useState(false); // 비밀번호 확인 입력란에 포커스가 있는지 여부를 저장하는 state 변수 생성

  const [errMsg, setErrMsg] = useState(""); // 오류 메시지를 저장하는 state 변수 생성
  const [success, setSuccess] = useState(false); // 회원가입이 성공적으로 이루어졌는지 여부를 저장하는 state 변수 생성

  useEffect(() => {
    userRef.current.focus(); // 페이지가 로드되면 사용자 이름 입력란에 포커스를 줌
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user)); // 사용자 이름이 정규식에 맞게 입력되었는지 검증하여 validName state 변수에 저장
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd)); // 비밀번호가 정규식에 맞게 입력되었는지 검증하여 validPwd state 변수에 저장
    setValidMatch(pwd === matchPwd); // 비밀번호와 비밀번호 확인 값이 일치하는지 여부를 검증하여 validMatch state 변수에 저장
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg(""); // 사용자 이름, 비밀번호, 비밀번호 확인 값이 변경될 때마다 오류 메시지를 초기화
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // 기본 이벤트 동작을 방지

    // JavaScript Hack을 사용하여 버튼이 활성화된 경우만 작동하도록 함

    const v1 = USER_REGEX.test(user); // 유저 이름 유효성 검사
    const v2 = PWD_REGEX.test(pwd); // 비밀번호 유효성 검사
    if (!v1 || !v2) {
      // 유효성 검사에 실패한 경우
      setErrMsg("Invalid Entry"); // 에러 메시지 설정
      return; // 함수 종료
    }

    try {
      const response = await axios.post(
        // axios 라이브러리를 사용해 POST 요청 전송
        REGISTER_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data)); // 응답 데이터 로그 출력
      //console.log(JSON.stringify(response))
      setSuccess(true); // 성공 상태 업데이트
      // 상태값 초기화
      setUser("");
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      // 요청이 실패한 경우
      if (!err?.response) {
        // 응답이 없는 경우
        setErrMsg("No Server Response"); // 에러 메시지 설정
      } else if (err.response?.status === 409) {
        // 중복된 유저 이름인 경우
        setErrMsg("Username Taken"); // 에러 메시지 설정
      } else {
        // 그 외의 경우
        setErrMsg("Registration Failed"); // 에러 메시지 설정
      }
      errRef.current.focus(); // 에러 메시지에 포커스 이동
    }
  };
  return (
    <>
      {success ? (
        // 등록에 성공한 경우에는 Success! 메시지와 로그인 링크가 표시됩니다.
        <section>
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
        // 등록에 실패하거나 아직 등록하지 않은 경우에는 등록 폼이 표시됩니다.

        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              Username:
              <FontAwesomeIcon
                icon={faCheck}
                className={validName ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validName || !user ? "hide" : "invalid"}
              />
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={
                userFocus && user && !validName ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4글자에서 24글자 사이 영어만 가능 합니다. <br />
              반드시 문자로 시작해야 합니다.
              <br />
              글자, 숫자, 밑줄, 하이픈만 허용됩니다.{" "}
            </p>

            <label htmlFor="password">
              Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPwd || !pwd ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8에서 24자 사이 문자만 가능 합니다.
              <br />
              반드시 대문자와 소문자, 숫자, 특수 문자가 포함되어야 합니다.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>

            <label htmlFor="confirm_pwd">
              Confirm Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validMatch && matchPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validMatch || !matchPwd ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />첫 번째 비밀번호 입력과
              일치해야 합니다.{" "}
            </p>

            <button
              disabled={!validName || !validPwd || !validMatch ? true : false}
            >
              Sign Up
            </button>
          </form>
          <p>
            Already registered?
            <br />
            <span className="line">
              <Link to="/login">Sign In</Link>
            </span>
          </p>
        </section>
      )}
    </>
  );
};

export default Register;
