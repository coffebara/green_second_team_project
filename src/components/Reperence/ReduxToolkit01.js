import TextArea from './CodeTextarea';
import React from "react";

export default function ReduxToolkit01() {
    return (
        <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabIndex="0" className="Reference_section">
            <h3 id="item-1" className="contents_title">
                Redux/toolkit 이란
            </h3>
            <p>Redux Toolkit 패키지는 Redux 논리를 작성하는 표준 방법입니다 .</p>
            <p>원래 Redux에 대한 세 가지 일반적인 문제를 해결하기 위해 만들어졌습니다.</p>
            <ol>
                <li>1. "Redux 스토어 구성이 너무 복잡합니다."</li>
                <li>2. "Redux가 유용한 작업을 수행하려면 많은 패키지를 추가해야 합니다."</li>
                <li>3. "Redux에는 너무 많은 상용구 코드가 필요합니다"</li>
            </ol>
            <h4 id="item-1-1" className="contents_subtitle">
                React Redux 설치 방법
            </h4>
            <p><TextArea value="npm install @reduxjs/toolkit"></TextArea></p>
            <h4>포함된 API</h4>
            <p>
                <span style={{ fontWeight: "500" }}>configureStore()</span>: createStore단순화된 구성 옵션과 좋은 기본값을 제공하기 위해 래핑합니다. 슬라이스 리듀서를 자동으로 결합하고,
            </p>
            <p>제공하는 모든 Redux 미들웨어를 추가하고, redux-thunk기본적으로 포함하고, Redux DevTools Extension을 사용할 수 있습니다.</p>
            <p>
                <span style={{ fontWeight: "500" }}>createReducer()</span>: switch 문을 작성하는 대신 case reducer 함수에 작업 유형의 조회 테이블을 제공할 수 있습니다. 또한 자동으로 라이브러리 immer를
                사용 하여 다음과 같이 사용 가능하다. 
            </p>
            <p><TextArea value="state.todos[3].completed = true."></TextArea></p>
            <p>
                <span style={{ fontWeight: "500" }}>createAction()</span>: 주어진 액션 유형 문자열에 대한 액션 생성자 함수를 생성합니다. 함수 자체가 toString()정의되어 있으므로 형식 상수 대신 사용할
                수 있습니다.
            </p>
            <p>
                <span style={{ fontWeight: "500" }}>createSlice()</span>: 리듀서 함수의 객체, 슬라이스 이름, 초기 상태 값을 받아 해당 액션 생성자와 액션 타입으로 슬라이스 리듀서를 자동으로 생성한다.
            </p>
            <p>
                <span style={{ fontWeight: "500" }}>createAsyncThunkpending/fulfilled/rejected</span>: 작업 유형 문자열과 약속을 반환하는 함수를 수락하고 해당 약속을 기반으로 작업 유형을 발송하는
                썽크를 생성합니다.
            </p>
            <p>
                <span style={{ fontWeight: "500" }}>createEntityAdapter</span>: 저장소에서 정규화된 데이터를 관리하기 위해 재사용 가능한 축소기 및 선택기 세트를 생성합니다.
            </p>
            <p>용 편의성을 위해 다시 내보낸 Reselect 라이브러리 의 유틸리티 createSelector입니다 .</p>
        </div>
    );
}
