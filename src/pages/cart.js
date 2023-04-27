import React, { useState } from "react";
import "../styles/cart.css";
import data from "../assets/data.js";
import Nav_Dark from "../pages/Nav_Dark.js";
import Nav_Light from "../pages/Nav_Light.js";
import Footer_Dark from "../pages/Footer_Dark.js"

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
    return course.map((item, idx) => {
        return (
            <tr key={item.id}>
                <td>X</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                    <input type="number" id="a" onChange={(e)=>handleChange(idx, e.target.value)} value={item.quantity} />
                </td>
                <td>{item.price * item.quantity}</td>
            </tr>
        );
    });
};

function Cart() {
    return (
        <div>
            <Nav_Dark/>
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
                                    {/* <tr>
                                        <td>X</td>
                                        <td>Next.js로 웹서비스 만들기</td>
                                        <td>35,000\</td>
                                        <td>1</td>
                                        <td>35,000</td>
                                    </tr> */}
                                    <CartList />
                                    <tr>
                                        <td colSpan="5">
                                            <div>
                                                <input type="text" placeholder="쿠폰 코드" />
                                                <input type="submit" value="쿠폰 적용하기" />
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
                                    <td className="total_price">1,200,000</td>
                                </tr>
                                <tr>
                                    <td>총계</td>
                                    <td className="total_price">1,200,000</td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <input type="button" value="결제 진행하기" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer_Dark/>
        </div>
    );
}

export default Cart;
