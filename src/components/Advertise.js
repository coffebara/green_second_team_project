// import '../styles/Advertise.css'
// import React from "react"
// import { useState, useEffect } from "react"


// export default function Advertise() {

//     const [filled, setFilled] = useState(0);
// 	const [isRunning, setIsRunning] = useState(false);
// 	useEffect(() => {
// 		if (filled < 100 && isRunning) {
// 			setTimeout(() => setFilled(prev => prev += 2), 50)
// 		}
// 	},[filled, isRunning])
//   return (
// 	  <div>
// 		  <div className="progressbar">
// 			  <div style={{
// 				  height: "100%",
// 				  width: `${filled}%`,
// 				  backgroundColor: "#a66cff",
// 				  transition:"width 0.5s"
// 			  }}></div>
// 			  <span className="progressPercent">{ filled }%</span>
// 		  </div>
// 		  <button className="btn" onClick={() => {setIsRunning(true)}}>Run</button>
// 	</div>
//   )
// }

import { useState, useEffect } from "react"
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom"

export default function Ad() {

    let navigate = useNavigate();
    
    const [bar, setBar] = useState(0)
    const [butn, setButn] = useState(null);


    useEffect(() => {
        if (bar < 100) {
            setTimeout(() => setBar(prev => prev += 2), 50)
        }
    })


    useEffect(() => {
        const timeout = setTimeout(() => {
            setButn(<Button onClick={() => { navigate('/home')}}>홈페이지 접속하기</Button>);
        }, 3000); // 1초 후에 실행

        return () => clearTimeout(timeout);
    }, []); //
    return (
        <div className="container">
            <p> 로딩중입니다</p>
            <div>{bar}%</div>
            <div>{butn}</div>
        </div>
    )
}