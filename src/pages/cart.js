import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import "../styles/cart.css";
import data from "../assets/data.js";
import Nav from "../components/Nav_Light.js";
import Footer from "../components/Footer_Light.js"

// data.js에서 받은 값으로 장바구니 리스트 뿌리기
const CartList = () => {
    const [course, setCourse] = useState(data);
    // 변경된 수량을 반영하는 함수
    const handleChange = (idx, quantity) => {
        setCourse(current => {
            const newCourse = [...current]
            // 수량이 1밑으로 안떨어지게 하는 조건문
            quantity < 1 ? quantity = 1 : newCourse[idx].quantity = quantity
            return newCourse;
        })
    };
    // data.js 에서 장바구니 리스트 출력
    return course.map((item, idx) => {
        return (
            <tr key={item.id}>
                <td><span className="cart_cancelBtn">X</span></td>
                <td>{item.title}</td>
                <td className="cart_price">{(item.price)?.toLocaleString()}₩</td>
                <td>
                    <input className="cart_input" type="number" id="a" onChange={(e)=>handleChange(idx, e.target.value)} value={item.quantity} />
                </td>
                <td className="cart_price">{(item.price * item.quantity).toLocaleString()}₩</td>
            </tr>
        );
    });
};

function Cart() {
    let navigate = useNavigate();
    return (
        <div>
            <Nav/>
            <section id="cart_title">
                <div className="cart_container">신청하기<br/>Step 1. 강의 선택</div>
            </section>
            <section id="cart_content">
                <div className="cart_container cart_gridContainer">
                    <div className="cart_list">
                        <form method="post">
                            <table className="cart_table">
                                <thead id="cart_thead">
                                    <tr>
                                        <th>&nbsp;</th>
                                        <th>강좌</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <CartList />
                                    {/* CartList 출력 예시 
                                    <tr>
                                        <td>X</td>
                                        <td>Next.js로 웹서비스 만들기</td>
                                        <td>35,000\</td>
                                        <td>1</td>
                                        <td>35,000</td>
                                    </tr> */}
                                    <tr>
                                        <td colSpan="5">
                                            <div>
                                                <input className="cart_coupon" type="text" placeholder="쿠폰 코드" />
                                                <input id="cart_coupon_btn" type="submit" value="쿠폰 적용하기" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                    <div className="cart_total">
                        <div>
                            <h4>신청할 강좌 합계</h4>
                        </div>
                        <table className="cart_table total_table">
                            <tbody>
                                <tr>
                                    <td>소계</td>
                                    <td className="total_price">284,000₩</td>
                                </tr>
                                <tr>
                                    <td>총계</td>
                                    <td className="total_price">284,000₩</td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                          {/* 결제페이지 이동 */}
                            <input onClick={() => { navigate('/checkout') }} id="cart_process_btn" type="button" value="결제 진행하기" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Cart;
