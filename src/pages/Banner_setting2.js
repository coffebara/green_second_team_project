import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"


export default function Banner_setting2() {
    let navigate = useNavigate();
    return (
            <div id="container">
                <div id="Banner_bg2">
                    <div id="Banner_bg2_img" >
                        <img src={process.env.PUBLIC_URL + '/NEXTjs.png'} id="Banner_bg2_big_img_setting" width="360px" height="260px"
                            onClick={() => { navigate('/bt') }} />
                    </div>
                    <div id="Banner_bg2_setting">
                        <h4>NEXT.js로 웹서비스 만들기</h4>
                        <div id="Banner_bg2_center1">
                            <ul id="Banner_bg2_list"><li>&nbsp;
                                <img src={process.env.PUBLIC_URL + '/HTML.png'} id="Banner_bg2_small_img_setting" width="30vw" height="30vh" />&nbsp;
                                <img src={process.env.PUBLIC_URL + '/CSS.png'} id="Banner_bg2_small_img_setting" width="30vw" height="30vh" />&nbsp;
                                <img src={process.env.PUBLIC_URL + '/JS.png'} id="Banner_bg2_small_img_setting" width="30vw" height="30vh" />
                            </li>
                                <li>⬝ React기반 프레임 워크</li>
                                <li>⬝ 풀스택 웹개발 가능</li>
                                <li>⬝ 32개의 강의</li>
                            </ul>
                        </div>
                        <Button id="Banner_bg2_button" variant="outline-dark" onClick={() => { navigate('/darkmode') }} >바로가기 →</Button>
                    </div>
                </div>
            </div>

    )
}