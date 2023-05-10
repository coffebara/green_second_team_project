import { useEffect, useState, useRef } from "react";
import "../styles/checkout.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Checkout() {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
    const state = useSelector((state) => state)
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState("option1")
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value)
    }
    // console.log(user);

    const changeName = (e) => {
        setName(e.target.value);
    }
    const changeEmail = (e) => {
        setEmail(e.target.value);
    }
    return (
        <div>
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
                                        <input onChange={changeName} className="checkout_input" type="text" placeholder="김상준" value={name}/>
                                    </li>
                                </ul>
                                <ul>
                                    <li>이메일</li>
                                    <li>
                                        <input onChange={changeEmail} className="checkout_input" type="email" placeholder="rlatkdwns@naver.com" value={email} />
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
                                        {state.cart.map((item, idx)=> (
                                            <tr key={state.cart[idx].id}>
                                                <td>{state.cart[idx].title} x {state.cart[idx].quantity}</td>
                                                <td><span className="checkout_price">{(state.cart[idx].price*state.cart[idx].quantity).toLocaleString()}₩</span></td>
                                            </tr>
                                        ))}
                                        {/* <tr>
                                            <td>HTML/CSS × 1</td>
                                            <td>
                                                <span className="checkout_price">75,000₩</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>React × 1</td>
                                            <td>
                                                <span className="checkout_price">75,000₩</span>
                                            </td>
                                        </tr> */}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td>
                                                <strong>소계</strong>
                                            </td>
                                            <td>
                                                <span className="checkout_price checkout_total">{state.checkout.subTotal.toLocaleString()}₩</span>
                                            </td>
                                        </tr>
                                        {state.checkout.discount !== 1 ? (
                                            <tr>
                                                <td>
                                                    <strong>할인</strong>
                                                </td>
                                                <td>
                                                    <span className="checkout_price checkout_total">-{(state.checkout.subTotal*(1-state.checkout.discount)).toLocaleString()}₩</span>
                                                </td>
                                            </tr>
                                        ):null}
                                        <tr>
                                            <td>
                                                <strong>총계</strong>
                                            </td>
                                            <td>
                                                <span className="checkout_price checkout_total">{(state.checkout.subTotal*state.checkout.discount).toLocaleString()}₩</span>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                                <div id="payment_box">
                                    <div className="payment_method">
                                        <ul>
                                            <li>
                                                <input onChange={handleOptionChange}  checked={selectedOption === 'option1'} value="option1" type="radio" name="checkout_payment" id="checkout_atm" />
                                                <label htmlFor="checkout_atm">무통장입금</label>
                                                <div className={`payment_method_explain ${selectedOption === 'option1'? 'show':""}`}><p>상단에 입금하시는 분 성함을 입력해주세요! 입금확인까지 평일은 영업시간내 10분~20분 정도 소요됩니다.</p></div>
                                            </li>
                                            <li>
                                                <input onChange={handleOptionChange}  checked={selectedOption === 'option2'} value="option2" type="radio" name="checkout_payment" id="checkout_acountAtm" />
                                                <label htmlFor="checkout_acountAtm">무통장입금 (가상계좌생성)</label>
                                                <div className={`payment_method_explain ${selectedOption === 'option2'? 'show':"" }`}><p>가상계좌로 입금하실 수 있습니다. (10분 내 자동 입금확인)</p></div>
                                            </li>
                                            <li>
                                                <input onChange={handleOptionChange}  checked={selectedOption === 'option3'} value="option3" type="radio" name="checkout_payment" id="checkout_credit" />
                                                <label htmlFor="checkout_credit">신용카드 결제</label>
                                                <div className={`payment_method_explain ${selectedOption === 'option3'? 'show':"" }`}><p>신용/체크카드로 결제하실 수 있습니다.</p></div>
                                            </li>
                                            <li>
                                                <input onChange={handleOptionChange}  checked={selectedOption === 'option4'} value="option4" type="radio" name="checkout_payment" id="checkout_rtAcount" />
                                                <label htmlFor="checkout_rtAcount">실시간계좌 이체</label>
                                                <div className={`payment_method_explain ${selectedOption === 'option4'? 'show': ""}`}><p>실시간계좌이체로 결제하실 수 있습니다.</p></div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="payment_agreement">
                                        <div><p>입력하신 개인정보는 사이트내에서 이용할 예정이며 <span className="payment_agreement_span" onClick={()=> navigate('/privacy-policy')}>개인정보 보호정책</span>을(를) 준수하고 있습니다.</p></div>
                                        <p id="payment_mustCheck"><input type="checkbox" />
                                        본인은 웹사이트 <span className="payment_agreement_span">이용 약관</span>을(를) 읽었으며 이에 동의합니다. </p> 
                                    <input className="cart_redBtn" type="button" value="결제하기"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
