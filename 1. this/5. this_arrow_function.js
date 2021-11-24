
/* 
  function 만드는 이유 : 
  - 코드들을 기능으로 묶을때 
  - 입출력 기계 만들고 싶을때

  Arrow function 의 장점 
  - 입출력 기계 만들때 보기 쉬움. 직관적임
*/

const hello = (a,b) => a + b + 10 
console.log(hello(5, 10));

// Case study 1
[1, 2, 3, 4].forEach((a) => console.log(a)) // 1,2,3,4

// Case study 2
const button = document.querySelector('button')
button.addEventListener('click', () => {
  console.log(this) // window
});

// Case study 3
const object = {
  myfunction : () => console.log(this) // window
}

object.myfunction();

