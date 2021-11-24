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

function 변경(obj) { // 파라미터는 변수의 생성 & 할당과 같다. 
  obj = { name: 'green' }
  return obj;
}
변경(컬러) // obj = 컬러 => 이것과 같음, 즉, 화살표를 복사해서 하나 만들어주세용
console.log(변경(컬러)) // {name: 'green'}
console.log(컬러) // { name: 'red' }


