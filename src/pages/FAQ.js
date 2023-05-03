import Accordion from 'react-bootstrap/Accordion';
import Nav_Light from '../components/Nav_Light';


export default function FAQ(){
    return(<div>
        <Nav_Light/>
        <h1>FAQ</h1>
        <p>노마드 코더에 대한 모든 것! 궁금한 것이 있다면 꼼꼼히 읽어봐주세요!</p>
      <Accordion className='container mt-5' defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0" >
        <Accordion.Header>강의가 사라졌어!</Accordion.Header>
        <Accordion.Body className=''>
       <ul><strong>로그인 계정을 확인해주세요</strong>
       <li>강의가 사라지는 경우는 없습니다! 대부분 다른 아이디로 로그인하여 발생하는 이슈입니다.</li>
        <li>강의를 구매했던 이메일과 동일한 이메일로 로그인해주세요.</li>
       </ul>
       
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
      <Accordion.Header>자주하는 질문 2</Accordion.Header>
        <Accordion.Body>
       자주하는 질문에 대한 답변적기
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
      <Accordion.Header>자주하는 질문 3</Accordion.Header>
        <Accordion.Body>
       자주하는 질문에 대한 답변적기
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
      <Accordion.Header>자주하는 질문 4</Accordion.Header>
        <Accordion.Body>
       자주하는 질문에 대한 답변적기
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}