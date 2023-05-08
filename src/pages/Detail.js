// 카트 연습용 임시페이지

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../store";
import Nav from "../components/Nav_Dark"

function Detail(props) {
    let { id } = useParams();
    let item = props.items.find((x) => x.id === Number(id));
    let dispatch = useDispatch();
    let navigate = useNavigate();

    // const purchase = () => {
    //     dispatch(addCart({ id: item.id, name: item.title, quantity: 1 }));
    //     // navigate("/cart");
    // };

    return (
        <div>
            <Nav/>
            <h2>상세페이지</h2>
            <hr />
            <ul>
                <li>
                    <img src={item.image} alt={item.title} style={{ width: "150px", height: "150px" }} />
                </li>
                <li>{item.title}</li>
                <li>{item.content}</li>
                <li>{item.price}원</li>
                <li>
                    <input type="button" value="구매하기" onClick={()=>{
                        dispatch(addCart( { id: item.id, title: item.title, quantity: 1, price: item.price } ))
                        }} />
                </li>
            </ul>
        </div>
    );
}

export default Detail;
