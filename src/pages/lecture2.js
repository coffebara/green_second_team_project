import "../styles/lecture2.css";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import { addItem } from "../store";
import { useDispatch } from "react-redux";

function Lecture2(props) {
  let { id } = useParams();

  let item = props.items.find((x) => x.id == id);
  console.log(item);
  let dispatch = useDispatch();

  return (
    <div class="container" id="lecture-container">
      <div className="lture">
        <div class="row">
          <div class="col-sm-12">
            <h1 id="html-lecture">
              {item.title}
              {/* HTML/CSS All-in-one : 기초부터 Bootstrap, SASS, 고급 animation
              까지 */}
            </h1>
            <div id="lecture-star">
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              <FaStar color="yellow" />
              {/* 별이 다섯개 */}
              <li id="blackcow">🐃 5870 수강생</li>
            </div>
          </div>
          <div className="Card-lecture">
            <div className="Card-lecture-1">
              <div class="col-sm-12">
                {/* <Card products={products[0]} i={1} /> */}
                <img src={item.image} />
              </div>
            </div>
            <div className="lecture-btn-main">
              <div class="col-sm-12">
                <input
                  type="button"
                  id="lecture-btn"
                  value={"장바구니"}
                  onClick={() => {
                    dispatch(
                      addItem({
                        id: item.id,
                        title: item.title,
                        quantity: 1,
                        price: item.price,
                      })
                    );
                  }}
                />
                <p>{item.price}원</p>
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
export default Lecture2;
// hhsshh@naver.com
//         Ddddddd@1
