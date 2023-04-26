import React from "react";
import '../styles/cart.css'
import Footer from "../components/Footer";

function Cart() {
    return (
        <div>
            <nav id="cart_tmpNav">임시 nav입니다</nav>
            <section id="cart_title">
                <div className="cart_container">배너 타이틀 신청하기</div>
            </section>
            <section id="cart_content">
                <div className="cart_container cart_grid">
                    <div className="cart_list">강의 신청 리스트</div>
                    <div className="cart_total">강의 토탈 장바구니zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz</div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Cart;
