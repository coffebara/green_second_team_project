import React, { useState } from "react";
import "../styles/checkout.css";
import data from '../assets/data.js'



function Checkout() {
    const [title, setTitle] = useState(data)
    console.log(title)
    return (
        <div>
            <nav id="checkout_tmpNav">임시 nav입니다</nav>
            <section id="checkout_title">
                <div className="checkout_container">배너 타이틀 결제하기</div>
            </section>
            <section id="checkout_content">
                <div className="checkout_container">
                    <div>
                        <p>* 무통장입금 결제시 입금확인까지 평일 영업시간 내 10~20분 소요됩니다.</p>
                        <p>* 영수증/수강증은 본인 이메일로 발송됩니다.</p>
                    </div>
                    <div id="checkout_info">
                        <div>
                            <h3>신청자 정보</h3>
                            <ul>
                                <li>이름</li>
                                <li>
                                    <input type="text" placeholder="김상준" />
                                </li>
                            </ul>
                            <ul>
                                <li>이메일</li>
                                <li>
                                    <input type="email" placeholder="rlatkdwns@naver.com" />
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>추가 정보</h3>
                            <ul>
                                <li>휴대폰번호</li>
                                <li>
                                    <input type="tel" placeholder="" />
                                </li>
                            </ul>
                            <ul>
                                <li>기타사항 (선택 사항)</li>
                                <li>
                                    <textarea name="" id="" cols="100" rows="3" placeholder=" (무통장입금시 이체자 성함 등)"></textarea>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <footer id="checkout_tmpFooter">임시 푸터</footer>
        </div>
    );
}

export default Checkout;
