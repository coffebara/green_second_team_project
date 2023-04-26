import React, { useState } from "react";
import "../styles/cart.css";
import data from "../assets/data.js";

// data.js에서 받은 값으로 장바구니 리스트 뿌리기
const CartList = () => {
    const [course, setCourse] = useState(data);
    // console.log(course);
    const handleChange = (item, idx) => {
        console.log(idx+ " : "+item.quantity);

        }
        // if (e.target.value < 0) {
        //     console.log(e.index);
        // }
    return course.map((item, idx) => {
        return (
            <tr key={item.id}>
                <td>X</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                    <input type="number" id="a" onChange={handleChange(item, idx)} value={item.quantity} />
                </td>
                <td>{item.price * 1}</td>
                {/* {console.log(a.value)} */}
            </tr>
        );
    });
};

function Cart() {
    return (
        <div>
            {/* <nav id="cart_tmpNav">임시 nav입니다</nav> */}
            <section id="cart_title">
                <div className="cart_container">배너 타이틀 신청하기</div>
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
            {/* <footer id="cart_tmpFooter">임시 푸터</footer> */}
        </div>
    );
}

export default Cart;
