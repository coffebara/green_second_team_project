import { useNavigate } from "react-router-dom";

export default function Footer() {
  let navigate = useNavigate();

  return (
    <div className="Darkmode" >
      <div className="container">
        <div id="Footer_setting">
          <div id="Footer_ul_detail_setting">
            <ul id="Footer_list_style">
              <li><span id="Footer_span">ABOUT US</span></li>
              <li id="Cursor_left">팀이름</li>
              <li id="Cursor_left">팀장: </li>
              <li id="Cursor_left">팀원: </li>
              <li id="Cursor_left">이메일: 학원 이메일</li>
              <li id="Cursor_left">주소: 학원 주소</li>
              <li id="Cursor_left">전화번호: 학원 전화번호</li>
            </ul>
          </div>
          <div id="Footer_ul_setting">
            <ul id="Footer_list_style">
              <li><span id="Footer_span">NAVIGATION</span></li>
              <li onClick={() => { navigate('/class') }} id="Cursor">강의</li>
              <li onClick={() => { navigate('/reference') }} id="Cursor">레퍼런스</li>
              <li onClick={() => { navigate('/login') }} id="Cursor">로그인</li>
            </ul>
          </div>
          <div id="Footer_ul_setting">
            <ul id="Footer_list_style">
              <li><span id="Footer_span">LEGAL</span></li>
              <li onClick={() => { navigate('/faq') }} id="Cursor">FAQ</li>
              <li id="Cursor">이용약관</li>
              <li id="Cursor">개인정보취급방침</li>
              <li id="Cursor">취소 및 환불정책</li>
            </ul>
          </div>
          <div id="Footer_ul_setting">
            <ul id="Footer_list_style">
              <li><img src={process.env.PUBLIC_URL + 'logo192.png'} id="Footer_img"></img></li>
              <li><img src={process.env.PUBLIC_URL + 'logo512.png'} id="Footer_img"></img></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
