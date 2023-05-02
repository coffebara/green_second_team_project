import { Button } from "react-bootstrap";
import Nav_Light from "../components/Nav_Light";
import Nav_Dark from "../components/Nav_Dark";
import Banner_Center from "./Banner_Center";
import Footer_Light from "../components/Footer_Light";
import { useNavigate } from "react-router-dom"


  
export default function Banner() {
    let navigate = useNavigate();
    return (
        <div>
            <Nav_Light />
            <div id="Banner_bg1">
                <h1 id="Banner_bg1_center1">Clone Startups<br />
                    Learn to code</h1>
                <div id="Banner_bg1_center2">코딩을 진짜로 만들어볼까요?<br />
                    실제 서비스를 따라 만들면서 코딩을 배우세요</div>
                <Button id="Banner_bg1_button" variant="outline-dark" onClick={() => { navigate('/class') }} >시작하기 →</Button>
            </div>

        <Banner_Center/>
        
            <div id="Banner_bg3">
                <div id="Banner_bg3_center1">
                    <img src={process.env.PUBLIC_URL + '/nugulman.png'} width="200px" />
                </div>
                <h2 id="Banner_bg3_center2">최고의 오픈 소스를 여러분과 여러분의 팀,
                    <p>그리고 여러분의 회사에 제공하세요</p></h2>
                <div id="Banner_bg3_center3">전 세계 1,700만 명 이상의 개발자가 신뢰하는 npm은
                    JavaScript 개발을 안전하게 만들기 위해 노력하고 있습니다.
                    무료 npm 레지스트리는 2백만 개 이상의 패키지를 보유하고 있고,
                    세계에서 가장 큰 소프트웨어 레지스트리인 자바스크립트의 코드 공유 중심이 되었습니다.
                    저희의 서비스는 여러분들의 작업을 한 단계로 끌어올려줍니다.
                </div>
            </div>
            <Footer_Light />
        </div>
    )
}