import React, { useState } from "react";
import "../styles/checkout.css";
import data from "../assets/data.js";
import Nav from "../components/Nav_Light.js";
import Footer from "../components/Footer_Light.js";

function Checkout() {
    const [title, setTitle] = useState(data);
    console.log(title);
    return (
        <div>
            <Nav />
            <section id="checkout_title">
                <div className="checkout_container">
                    신청하기
                    <br />
                    Step 2. 결제
                </div>
            </section>
            <section id="checkout_content">
                <div className="checkout_container checkout_contents">
                    <div>
                        <p>* 무통장입금 결제시 입금확인까지 평일 영업시간 내 10~20분 소요됩니다.</p>
                        <p>
                            * <strong>영수증/수강증</strong>은 본인 이메일로 발송됩니다.
                        </p>
                    </div>
                    <div id="checkout_info">
                        <div className="checkout_info_title">
                            <h3 className="checkout_info_subtitle">신청자 정보</h3>
                            <div className="checkout_info_contents">
                                <ul>
                                    <li>이름</li>
                                    <li>
                                        <input className="checkout_input" type="text" placeholder="김상준" />
                                    </li>
                                </ul>
                                <ul>
                                    <li>이메일</li>
                                    <li>
                                        <input className="checkout_input" type="email" placeholder="rlatkdwns@naver.com" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="checkout_info_title">
                            <h3 className="checkout_info_subtitle">추가 정보</h3>
                            <div className="checkout_info_contents">
                                <ul>
                                    <li>휴대폰번호</li>
                                    <li>
                                        <input className="checkout_input" type="tel" placeholder="" />
                                    </li>
                                </ul>
                                <ul>
                                    <li>기타사항 (선택 사항)</li>
                                    <li>
                                        <textarea name="" className="checkout_area" id="" cols="100" rows="2" placeholder=" (무통장입금시 이체자 성함 등)"></textarea>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="checkout_info_title">
                            <h3 className="checkout_info_subtitle">신청한 강좌</h3>
                            <div className="checkout_info_contents">
                                <table className="checkout_table">
                                    <thead>
                                        <tr>
                                            <th>강좌</th>
                                            <th>소계</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>HTML/CSS × 1</td>
                                            <td>
                                                <span className="checkout_price">75,000₩</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>JavaScript 입문 × 1</td>
                                            <td>
                                                <span className="checkout_price">78,000₩</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>JavaScript ES6 × 1</td>
                                            <td>
                                                <span className="checkout_price">56,000₩</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>React × 1</td>
                                            <td>
                                                <span className="checkout_price">75,000₩</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td>
                                                <strong>소계</strong>
                                            </td>
                                            <td>
                                                <span className="checkout_price">284,000₩</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>총계</strong>
                                            </td>
                                            <td>
                                                <span className="checkout_price">284,000₩</span>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                                <div id="payment_box">
                                    <div className="payment_method">
                                        <ul>
                                            <li>
                                                <input type="radio" name="checkout_payment" id="checkout_atm" />
                                                <label for="checkout_atm">무통장입금</label>
                                            </li>
                                            <li>
                                                <input type="radio" name="checkout_payment" id="checkout_acountAtm" />
                                                <label for="checkout_acountAtm">무통장입금 (가상계좌생성)</label>
                                            </li>
                                            <li>
                                                <input type="radio" name="checkout_payment" id="checkout_credit" />
                                                <label for="checkout_credit">신용카드 결제</label>
                                            </li>
                                            <li>
                                                <input type="radio" name="checkout_payment" id="checkout_rtAcount" />
                                                <label for="checkout_rtAcount">실시간계좌 이체</label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="payment_agreement">
                                        <div><p>입력하신 개인정보는 사이트내에서 이용할 예정이며 <span className="payment_agreement_span">개인정보 보호정책</span>을(를) 준수하고 있습니다.</p></div>
                                        <p id="payment_mustCheck"><input type="checkbox" />
                                        본인은 웹사이트 <span className="payment_agreement_span">이용 약관</span>을(를) 읽었으며 이에 동의합니다. </p> 
                                    <input id="payment_btn" type="button" value="결제하기"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

<table>
    <tr>
        <td>1번</td>
        <td>2번</td>
    </tr>
</table>;

export default Checkout;
