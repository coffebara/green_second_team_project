import { Button } from "react-bootstrap";
import Nav_Light from "./Nav_Light";
import Nav_Dark from "./Nav_Dark";
import Footer_Light from "./Footer_Light";
import Footer_Dark from "./Footer_Dark";
import { useNavigate } from "react-router-dom"


export default function Banner(){
    let navigate = useNavigate();
    return(
        <div>
            <Nav_Light/>
            <div id="Banner_bg1"> 
                <h1 id="Banner_bg1_center1">Clone Startups<br/>
                Learn to code</h1>
               <div id="Banner_bg1_center2">코딩을 진짜로 만들어볼까요?<br/>
                실제 서비스를 따라 만들면서 코딩을 배우세요</div>
                <Button id="Banner_bg1_button" variant="outline-dark" onClick={()=>{navigate('/class')}} >시작하기 →</Button>
                </div>


            <div  id="Banner_bg2"> 
                <div id="Banner_bg2_img">
                    <img src={process.env.PUBLIC_URL+'/NEXTjs.png'} id="Banner_bg2_big_img_setting" width="420px" height="320px" />
                </div>
                <div id="Banner_bg2_setting">
                <h2>NEXT.js로 웹서비스 만들기</h2>
                
                <div id="Banner_bg2_center1">
                <ul id="Banner_bg2_list"><li>
                <img src={process.env.PUBLIC_URL+'/HTML.png'} id="Banner_bg2_small_img_setting" width="40px" height="40px" />
                <img src={process.env.PUBLIC_URL+'/CSS.png'} id="Banner_bg2_small_img_setting" width="40px" height="40px" />
                <img src={process.env.PUBLIC_URL+'/JS.png'} id="Banner_bg2_small_img_setting" width="40px" height="40px" />
                </li>
                <li>React기반 프레임 워크</li>
                <li>풀스택 웹개발 가능</li>
                <li>32개의 강의</li>
                </ul>
                </div>
                <Button id="Banner_bg2_button" variant="outline-dark" onClick={()=>{navigate('/sorry')}} >바로가기 →</Button>
                 </div>
                </div>
          

                <div id="Banner_bg3">
                    <div id="Banner_bg3_center1">
                    <img src={process.env.PUBLIC_URL+'/nugulman.png'} width="200px" />
                    </div>
                <h2 id="Banner_bg3_center2">우리에 대한 소개</h2>
               <div id="Banner_bg3_center3">는 너굴맨이 처리했으니 안심하라구
               <p>도망가~</p>
               </div>
                </div>      
                <Footer_Light/>
        </div>
    )
}