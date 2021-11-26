'use strict';


/* array */
// const arr = [1, 2, 3]
// const a = arr[0]
// const b = arr[1]
const [bora, coco, joowon] = [29, 5, 30] // 모양만 맞춰서 선언하면 변수가 생김
const [taehyeon, mom, dad = 60] = [28, 56] // default값 설정가능

/* object */
// 1. object 데이터를 꺼내서 변수에 담는 경우
// const obj = { name: 'kim', age: 30 }
// const name = obj.name;
// const age = obj.age;
// const { name, age } = { name: 'kim', age : 30}
const { name: user = 'kim', age } = { age: 30 }

// 2. 변수를 object에 담는 경우
const name = "kim";
const hobby = "sleep";
const obj1 = { name: name, hobby: hobby };
const obj2 = { name, hobby }; // 축소판

// 3. 함수 파라미터 만들때도 사용 가능
function 함수({ hobby }) {
  console.log({ hobby })
}
함수(obj2);
함수({ name: name, hobby: hobby });


