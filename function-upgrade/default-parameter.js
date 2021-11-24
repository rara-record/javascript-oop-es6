'use strict';

const browser = window.browser || window.chrome;

/*
  함수의 default 파라미터 넣기
*/

function 더하기(a, b = 5) { // 파라미터 디폴트값 
  console.log(a + b)
}

더하기(1);

function 곱하기(a, b = 2 * a) { // 연산도 가능
  console.log(a * b)
}

곱하기(2);

function 빼기(a, b = 임시함수()) { // 함수도 가능
  console.log(a - b)
}

function 임시함수() {
  return 10;
}

빼기(50);