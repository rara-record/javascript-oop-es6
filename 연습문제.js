// 구조분해할당 연습문제
// 1. a와 address와 number라는 변수는 각각 무슨 값을 가지고 있을까요? 
var [number, address] = [30, 'seoul'];
var { address: a, number = 20 } = { address, number };

var { address: a, number = 20 } = { address: 'seoul', number: 30 }

// a : 'seoul', address : 'seoul', number : 30





/*
  여기서 키, 몸무게, 상의사이즈, 하의사이즈 정보를 각각 뽑아서 4개의 변수를 만들고 싶습니다.
  어떻게 만들면 될까요?
  (참고 : 데이터가 얼마나 복잡하든간에 좌우 형태를 똑같이 맞추시면 destructuring 문법으로 변수를 만들 수 있습니다.)

*/

let 신체정보 = {
  body: {
    height: 190,
    weight: 70
  },
  size: ["상의 Large", "바지 30인치"],
};

let {
  body: {
    height,
    weight
  },
  size: [상의, 하의]
} = 신체정보;