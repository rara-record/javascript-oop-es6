'use strict';

/* 
  for of 
  - Array, String, arguments, NodeList, Map, Set
*/

// array
const array = [1, 2, 3, 4, 5]
for (let num of array) {
  console.log(num);
}

//string
for (let string of 'array') {
  console.log(string);
}

array[Symbol.iterator]();

// 구구단
let 데이터 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (let i of 데이터) {
  for (let j of 데이터) {
    console.log(`${i} * ${j} = ${i * j}`)
  }
}

/*
Q. 어떤 놈이 key값 마지막 부분에 오타를 섞어놨습니다.
key값 마지막에 한자릿수 숫자가 섞여있으면 그걸 다 제거하고 싶습니다.
어떻게 코드를 짜면 될까요?
마지막 글자가 숫자인지 판단하는 방법도 잘 찾아봐야겠군요.

(예시)
array안의 object안에 들어있는
name1 : 'chair' 이게
name : 'chair' 이렇게 숫자만 깔끔하게 없어져야합니다.
*/

// 1.
let 오브젝트 = {
  name1: 'chair'
}

// 숫자라면
if (!isNaN(parseInt('name1'.slice(-1)))) {
  let newValue = 오브젝트.name1; // chair 
  let newKey = 'name1'.slice(0, -1) // 맨 뒷문자 제거
  오브젝트[newKey] = newValue; // 추가

  delete 오브젝트.name1; // 기존값 지움
}

console.log(오브젝트) // {name: 'chair'}




// 2.
const products = [
  {
    name1: 'chair',
    price1: 7000,
  },
  {
    name2: 'sofa',
    price: 5000,
  },
  {
    name1: 'desk',
    price3: 9000,
  },
];

for (let obj of products) {
  for (let key in obj) {
    if (!isNaN(parseInt(key.slice(-1)))) {
      const newValue = obj[key];
      const newKey = key.slice(0, -1);
      obj[newKey] = newValue;

      delete obj[key];
    }
  }
}


