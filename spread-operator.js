
/*
  Spread Operator
  - 마침표를 연달아서 3개 쓰면 그게 spread operator 문법임
  - 한글로는 펼침연산자 즉, 괄호제거 해주는 연산자임
  - 문자에 붙이면 문자도 조각내버림
  - 중복시 무조건 뒤에있는 값이 이김
*/

const array = ['hello', 'world']
console.log(array) // ['hello', 'world']
console.log(...array) // hello world

const string = 'hrello world';
console.log(string); // hrello world
console.log(string[0]); // h
console.log(...string); // h r e l l o   w o r l d


// spread 활용방법 : array, objec를 합치고, 복사하는데 매우 자주 쓰임

// array합치기
const a = [1, 2, 3]
const b = [4, 5]
const c = [...a, ...b] // [1, 2, 3, 4, 5]

// object 합치기
var o1 = { a: 1, b: 2 };
var o2 = { ...o1, c: 3, } // {a: 1, b: 2, c: 3} : spread 연산자를 이용해 괄호를 벗겨서 추가

// 값 복사
const d = [4, 5, 6]
const e = d; // 이건 복사가 아니라, 값 '공유'
const f = [...d]; // 리얼 복사 deep copy
console.log(d === f) // false


