'use strict';

/*
  Reference data type : array, object
  - object, array에 담긴 변수는 값이 담긴 저장소 자체가 아닌,
  그 저장소를 가리키는 화살표이다.
*/

// 예시1
const 보라1 = '보라';
const 보라2 = '보라';
console.log(보라1 === 보라2) // true

const 이름1 = { name: '보라' };
const 이름2 = { name: '보라' };
console.log(이름1 === 이름2) // false : 서로 다른 화살표


// 예시2
const 날씨1 = { name: '추움' };
const 날씨2 = 날씨1;
날씨1.name = '더움';
console.log(날씨1, 날씨2) // {name: '더움'} {name: '더움'} : 같은 곳을 바라보기때문



// 예시3 : 오브젝트를 재할당해주는 함수를 만들었다. 그런데 결과는 실패. 이유는?
const 컬러 = { name: 'red' };

function 변경(obj) {
  obj = { name: 'green' }
  return obj;
}
변경(컬러)
console.log(변경(컬러)) // {name: 'green'}
console.log(컬러) // { name: 'red' }


/*
  왜그러냐면 함수 만들 때 파라미터라는건,
  일종의 변수처럼 생성되고 사라지는 존재라고 보면 된다.
  그냥 쉽게 말하면 변수다.
*/

{
  // (인간의 시점)

  const 이름1 = { name: '김' };
  function 변경(obj) {
    obj = { name: 'park' };
  }
  변경(이름1);



  // (자바스크립트의 시점) : 자바스크립트가 파라미터를 만들고 사용할땐 대충 이렇게 만든다고 생각하면 된다

  const 이름1 = { name: '김' };
  function 변경(obj) {
    obj = { name: 'park' };
  }
  변경(const obj = 이름1);
  /* 
  obj라는 파라미터자리에 이름1이라는 변수를 집어넣으면
  const obj = 이름1 이렇게 파라미터형 변수를 만든겁니다.
  */
}


