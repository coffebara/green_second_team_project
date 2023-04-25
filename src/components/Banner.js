import { Button } from "react-bootstrap";

export default function Banner(){
    return(
        <div>
            <div id="Banner_bg1"> 
               <p>가나다</p>
               <p>적당히 꾸밀 말들을 적는 곳</p>
                <Button variant="warning" >둘러보기</Button>
                </div>
                <div id="Banner_bg2">
                <p>123</p>
               <p>무슨말을 할까</p>
                <Button variant="danger" >둘러보기</Button>
                </div>
        </div>
    )
}