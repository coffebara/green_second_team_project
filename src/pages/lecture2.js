import { useState } from "react";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import data from "../assets/data.js";
import "../styles/lecture2.css";

function Lecture2() {
  // 컴포넌트를 export합니다.
  let [products] = useState(data); // useState를 이용해서 상태를 초기화합니다.
  return (
    <div class="container" id="lecture-container">
      <div className="lture">
        <div class="row">
          <div class="col-sm-12">
            <h1 id="html-lecture">
              HTML/CSS All-in-one : 기초부터 Bootstrap, SASS, 고급 animation
              까지
            </h1>
            <div id="lecture-star">
              <li> ⭐⭐⭐⭐⭐ ( 43 리뷰 ) </li>
              <li id="blackcow">🐃 5870 수강생</li>
            </div>
          </div>
          <div className="Card-lecture">
            <div className="Card-lecture-1">
              <div class="col-sm-12">
                <Card products={products[0]} i={1} />
              </div>
            </div>
            <div className="lecture-btn-main">
              <div class="col-sm-12">
                <input type="button" id="lecture-btn" value={"장바구니"} />
                <p>현장강의: 130,000</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12"></div>
        <div class="col-sm-12"></div>
        <div class="col-sm-12"></div>
        <div class="col-sm-12"></div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <>
      <Col>
        <img src={props.products.image} />
        <img src={props.products.detailImage} />
      </Col>
    </>
  );
}

export default Lecture2;
// hhsshh@naver.com
//         Ddddddd@1
