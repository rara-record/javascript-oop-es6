'use strict';


/*
Q1. <img> 이미지 로딩 성공시 특정 코드를 실행하고 싶습니다.
HTML 안에 있는 이미지 로딩이 끝나면 무언가 코드를 실행하고 싶습니다.
이 이미지가 로드가 되면 콘솔창에 성공, 로드가 실패하면 콘솔창에 실패를 출력하고 싶은데
Promise 문법의 then, catch 함수를 사용해 만들고 싶습니다. 어떻게 코드를 짜면 될까요?
(참고) 이미지 로딩이 끝났다는 것은 <img>에 load라는 이벤트리스너를 붙여서 체크가 가능합니다.
(참고) 이미지 로딩이 실패했다는 것은 <img>에 error라는 이벤트리스너를 붙여서 체크가 가능합니다.

*/

// {
//   const img = document.querySelector('img');
//   img.addEventListener('load', () => {
//     // 로딩성공시 실행코드
//   });
//   img.addEventListener('error', () => {
//     // 로딩실패시 실행코드
//   })
// }


const imgLoding = new Promise((resolve, reject) => {
  const img = document.querySelector('#test');
  img.addEventListener('load', () => resolve());
  img.addEventListener('error', () => reject());
})

imgLoding
  .then(() => console.log('성공'))
  .catch(() => console.log('실패'))



/*
Q2. Ajax 요청이 성공하면 무언가 코드를 실행하고 싶습니다.
https://codingapple1.github.io/hello.txt 라는 경로로 GET 요청을 하면 인삿말이 하나 딸려옵니다.
여기로 GET 요청을 해서 성공하면
Promise의 then 함수를 이용해서 Ajax로 받아온 인삿말을 콘솔창에 출력해주고 싶습니다.
어떻게 하면 될까요?
(jQuery done함수 자체에 Promise 기능이 있기 때문에 코드가 약간 중복도 많고 쓸데없을 수 있지만 연습삼아 해봅시다.)
*/

// $.ajax({
//     type: 'GET',
//     url: 'https://codingapple1.github.io/hello.txt',
// }).done((result) => {
//     console.log(result);
// })


const url = 'https://codingapple1.github.io/hello.txt';
const ajax = new Promise((resolve, reject) => {
  $.get(url).done((results) => resolve(results))
})

ajax.then((results) => console.log(results))



/*
  Q3. Promise chaining

  2번 문제에서 https://codingapple1.github.io/hello.txt 라는 경로로 GET 요청을 한 뒤에
  .then을 이용해 인삿말을 콘솔창에 출력해보았습니다.
  이번엔 그 직후 https://codingapple1.github.io/hello2.txt 라는 경로로 GET 요청을 또 하고
  .then을 이용해 인삿말을 또 출력해보고 싶습니다.

  쉽게 말하면
  1. hello.txt GET 요청
  2. 그게 완료되면 hello2.txt GET 요청
  3. 그게 완료되면 hello2.txt 결과를 콘솔창에 출력
  을 하고 싶다는 말입니다.

  2번에서 만든 코드를 어떻게 업데이트하면 될까요?
  힌트1) 프로미스.then(()=>{둘째실행할거}).then(()=>{셋째실행할거})
  이렇게 then을 여러개 이어붙여 만들어봅시다.
  힌트2) .then()은 당연히 new Promise()로 생성한 프로미스 오브젝트들에 붙일 수 있습니다.
*/

const url1 = 'https://codingapple1.github.io/hello.txt';
const url2 = 'https://codingapple1.github.io/hello2.txt';

const chaining = new Promise((resolve, reject) => {
  $.get(url1).done((results) => resolve(results))
});
chaining.then(results => console.log(results))

const chaining2 = new Promise((resolve, reject) => {
  $.get(url2).done((results2) => resolve(results2))
});
chaining2.then(results2 => console.log(results2))
