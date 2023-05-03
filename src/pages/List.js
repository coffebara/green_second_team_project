// 카트 연습용 임시 페이지

import data from "../assets/data.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function List(props) {
    // 데이터 가져옴
    let [items, setItems] = useState(data);
    const navigate = useNavigate();
    return (
        <>
            <ul>
                {items.map((item) => {
                    return (
                        <div key={item.id}>
                            <li>
                                <img src={item.image} alt={item.title} style={{ width: "200px", height: "200px" }} />
                            </li>
                            <li><h3>{item.title}</h3></li>
                            <li><input type="button" value="상세정보 보기" onClick={()=>{navigate(`/detail/${item.id}`)}}/></li>
                            <hr />
                        </div>
                    );
                })}
            </ul>
        </>
    );
}

export default List;
