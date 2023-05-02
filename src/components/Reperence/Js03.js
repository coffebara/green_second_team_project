import React from 'react';
import TextArea from './CodeTextarea';

function Js03() {
  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar-example3"
      data-bs-offset="0"
      tabIndex="0"
      className="Reference_section"
    >
      <h3 id="item-1" className="contents_title">
        객체(Object)란?
      </h3>
      <p>
        객체(object)란 실생활에서 우리가 인식할 수 있는 사물로 이해할 수
        있습니다.
      </p>
      <p>
        자바스크립트의 기본 타입(data type)은 객체(object)입니다. 객체란
        이름(name)과 값(value)으로 구성된 프로퍼티(property)의 정렬되지 않은
        집합입니다. 프로퍼티의 값으로 함수가 올 수도 있는데, 이러한 프로퍼티를
        메소드(method)라고 합니다.
      </p>
      <p>
        자바스크립트에서는 숫자, 문자열, 불리언, undefined 타입을 제외한 모든
        것이 객체입니다.하지만 숫자, 문자열, 불리언과 같은 원시 타입은 값이
        정해진 객체로 취급되어, 객체로서의 특징도 함께 가지게 됩니다.
      </p>
      <h4 id="item-1-1" className="contents_subtitle">
        객체의 생성
      </h4>
      <h5 id="item-1-1" className="contents_subtitle">
        1. 리터럴 표기(literal notation)를 이용한 방법
      </h5>
      <p>
        자바스크립트에서 객체를 생성하는 가장 쉬운 방법은 리터럴 표기(literal
        notation)를 이용하는 방법입니다.
      </p>
      <p>
        각각의 프로퍼티는 이름과 값을 콜론(:)으로 연결하고, 쉼표(,)를 사용해
        다른 프로퍼티와 구분합니다. 프로퍼티의 이름으로는 자바스크립트의
        식별자(identifier)나 문자열을 사용할 수 있습니다.
      </p>
      <h5 id="item-1-1" className="contents_subtitle">
        2. 생성자 함수(constructor function)를 이용한 방법
      </h5>
      <p>new 연산자를 사용하여 객체를 생성하고 초기화할 수 있습니다.</p>
      <p>
        이때 사용되는 메소드를 생성자(constructor)라고 하며, 이 메소드는 새롭게
        생성되는 객체를 초기화하는 역할을 합니다.
      </p>
      <p>자바스크립트는 원시 타입을 위한 생성자를 미리 정의하여 제공합니다.</p>
      <h5 id="item-1-1" className="contents_subtitle">
        3. Object.create() 메소드를 이용한 방법
      </h5>
      <p>
        Object.create() 메소드를 이용하여 객체를 생성할 수도 있습니다.
        Object.create() 메소드는 지정된 프로토타입(prototype) 객체와 프로퍼티를
        가지고 새로운 객체를 만들어 줍니다. 따라서 이 메소드를 이용하면 사용자가
        프로토타입 객체를 직접 명시할 수 있으므로, 상당히 유용하게 사용됩니다.
      </p>
      <TextArea value={"<html>\n<head>\n</head>\n<body>\nHello world!\n</body>\n</html>"} />
      <p>
        Object.create() 메소드의 첫 번째 인수로는 프로토타입으로 사용할 객체를
        전달합니다. 두 번째 인수로는 새로운 객체의 추가할 프로퍼티 정보를
        전달합니다
      </p>
      <p>
        위와 같은 방법으로 생성되어 메모리에 대입된 객체를
        인스턴스(instance)라고 합니다.
      </p>
    </div>
  );
}

export default Js03;
