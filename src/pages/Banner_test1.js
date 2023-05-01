import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"


export default function Banner_test1() {
    let navigate = useNavigate();
    return (
        <div className="bg-secondary bg-opacity-25 pb-4" >
            <section className="container oberflow-hidden">
                <div className="row g-5 mt-4" >
                    <div className="col-sm-6 col-lg-3">
                        <div className="card" id="cursor" onClick={() => { navigate('/sorry') }}>
                            <img src={process.env.PUBLIC_URL + '/NEXTjs.png'} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h2 className="card-title fs-5 fw-bold">Next.js로 웹서비스 만들기</h2>
                                <p className="card-text px-1 py-1">Next.js는 프론트엔드부터 서버까지 만들 수 있는 React기반 프레임워크입니다.
                                    이것만 사용해도 풀스택 웹개발이 가능합니다. Next.js 사용시 서버사이드
                                    렌더링이 쉽기 때문에 React, Vue만 ...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card" id="cursor" onClick={() => { navigate('/sorry') }}>
                            <img src={process.env.PUBLIC_URL + '/db.png'} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h2 className="card-title fs-5 fw-bold">한 번에 끝내는 SQL & Database</h2>
                                <p className="card-text px-1 py-1">  SQL은 관계형 데이터베이스에서 데이터를 입출력할 때 사용하는 언어입니다.
                                    관계형 데이터베이스를 다루는 곳에서 일 잘하고 싶다면 SQL을...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card" id="cursor" onClick={() => { navigate('/sorry') }}>
                            <img src={process.env.PUBLIC_URL + '/flutter.png'} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h2 className="card-title fs-5 fw-bold">Flutter로 만드는 iOS, Android 앱</h2>
                                <p className="card-text px-1 py-1">  Flutter 라이브러리를 사용하면 하나의 코드베이스로 iOS, Android 앱을 만들 수 있습니다.
                                    - React Native보다 빠른 네이티브급 성능과 느낌을...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="card" id="cursor" onClick={() => { navigate('/sorry') }}>
                            <img src={process.env.PUBLIC_URL + '/dl.png'} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h2 className="card-title fs-5 fw-bold">Tensorflow 딥러닝 AI 기초부터 실무까지</h2>
                                <p className="card-text px-1 py-1">
                                    파이썬 문법 쬬큼 알면 중학생도 쉽게 이해가능한 Tensorflow 딥러닝 기초강좌입니다.
                                    머신러닝 같은거 대학원에서 최소 2년은 구른 사람이 할 수 있는 ...</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>

    )
}