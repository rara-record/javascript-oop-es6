
/*
  this keyword 3

  - 이벤트 리스너 안에서 this === e.currentTarget
  - 함수가 쓰인 위치에 따라 this값이 변한다
  - 콜백함수 안에서의 this는 일반함수랑 똑같이 winow 출력 
*/

const button = document.querySelector('button')
button.addEventListener('click', function (ev) {
  console.log(this) // <button></button>
});

// Case study : 콜백함수 안에서의 this
const button2 = document.querySelector('button')
button2.addEventListener('click', function (e) {

  const array = [1, 2, 3];
  array.forEach(function () { 
    console.log(this) // window || 'use strict' 쓰면 undifined
  })
});


