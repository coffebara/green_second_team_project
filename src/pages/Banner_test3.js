import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"


export default function Banner_test3() {
    let navigate = useNavigate();
    return (
        <div className="container-fluid bg-secondary mt-3 ">
            <div className="row vh-50 justify-content-center align-items-center">
                <div className="col-lg-4 col-xl-4 " > 
                    <img src={process.env.PUBLIC_URL + '/db.png'} className="img-fluid p-4" alt="너굴맨" />
                    </div>
                <div className="col-lg-4 col-xl-4">
                    <h5>NEXT.js로 웹서비스 만들기</h5>
                   
                    </div>

            </div>
        </div>


    )
}