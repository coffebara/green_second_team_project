import { useEffect, useState } from 'react';
import '../../styles/reference.css'
import axios from 'axios';

export default function Comment(){
    const [data, setData] = useState([]);
  
    useEffect(() => {
      axios.get('/api/data')
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

    return <div className="reference_comment"><hr /><div className='reference_comment_list'><div className='comment_writer'>박철준</div><div className='comment_content'>이게 뭔 소리죠? 잘 이해가 안가는군요.</div></div><form action=''><hr /><div className='reference_comment_writing'><input className='reference_comment_textbox' type="text" placeholder='로그인 후 이용해주세요.'/><button className='reference_comment_btn' onClick={()=>{
        console.log(data)
    }}>댓글 작성</button></div><hr /></form></div>
}