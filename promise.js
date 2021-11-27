
/*
  자바스크립트를 실행하는 웹브라우저는 
  stack이라는 코드 실행 공간에서  코드를 차례로 실행한다. (synchronous)
  하지만 setTimeout, addEventListener, ajax 관련 특수한 코드들은
  약간 제쳐두고 다른 코드부터 실행하는데, 
  이 처리방식을 비동기(asynchronous)라고 한다.
*/

/*
  Promise의 몇가지 특징

  1. 일단 new Promise()로 생성된 변수를 콘솔창에 출력해보시면 현재 상태를 알 수 있습니다.
  성공/실패 판정 전에는 <pending> 이라고 나오며
  성공 후엔  <resolved>
  실패 후엔 <rejected> 이런 식으로 나옵니다.
  이렇게 프로미스 오브젝트들은 3개 상태가 있습니다.
  그리고 성공을 실패나 대기상태로 다시 되돌릴 순 없습니다. 참고로 알아둡시다.

  2. Promise는 동기를 비동기로 만들어주는 코드가 아닙니다.
  Promise는 비동기적 실행과 전혀 상관이 없습니다.
  그냥 코딩을 예쁘게 할 수 있는 일종의 디자인 패턴입니다.
  예를 들면.. Promise 안에 10초 걸리는 어려운 연산을 시키면 10초동안 브라우저가 멈춥니다.
  10초 걸리는 연산을 해결될 때 까지 대기실에 제껴두고 그런거 아닙니다.
*/

// ES6 Promise => 성공 or 실패 판정 기계
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sum = 1 + 1;
    reject(sum);
  }, 1000)
});
promise
  .then((sum) => {
    console.log(`정답은 ${sum}입니당`)
    return sum * sum
  })
  .then((multiply) => {
    console.log(`정답은 ${multiply}입니당`)
  })
  .catch(() => {
    console.log('실패했어용')
  })
  .finally(() => {
    console.log('프로미스끝')
  })