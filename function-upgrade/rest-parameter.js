
/*
  ES5 : 함수의 arguments
  - 함수의 모든 파라미터들을 전부 한꺼번에 다루고 싶은 경우
  - 함수 안에서 쓸 수 있는 미리 정의된 키워드 혹은 변수
  - 모든 파라미터를 []에 담아줌

  arguments의 단점
  - 임시 파라미터를 추가할 수가 없음!
*/


function 함수(a, b, c) {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]) // 2, 3, 4
  }
}

함수(2, 3, 4);

/*
  rest-parameter : ...rest
  - 나머지 파라미터
  - 모든 파라미터를 [] array 안에 담는다
  - 파라미터가 여러개면 rest는 항상 마지막 파라미터로 넣어야한다.
  - 2개 이상 사용할 수 없다
  - spread operator 와 차이점 : 함수의 파라미터로 오면 ...rest 그 이외는 스프레드연산자
*/

function 함수2(a, b, ...rest) {
  console.log(rest) // [3, 4, 5, 6, 7] 
}
함수2(1, 2, 3, 4, 5, 6, 7)


function 함수3(...rest) {
  for (let i = 0; i < rest.length; i++) {
    console.log(rest[i]) // 10, 20, 30
  }
}
함수3(10, 20, 30);
