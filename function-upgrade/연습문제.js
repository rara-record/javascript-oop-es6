'use strict';

/* Spread, REST 파라미터 연습문제 */

{
  // spread 문제1. 코드의 출력 결과는?
  const a = [1, 2, 3];
  const b = '김밥';
  const c = [...b, ...a];
  console.log(c); // ['김', '밥', 1, 2, 3]
}


{
  // spread 문제2. 대괄호가 가득한 아래 코드의 출력 결과는? 
  const a = [1, 2, 3];
  const b = ['you', 'are'];
  const c = function (a, b) {
    console.log([[...a], ...[...b]][1]) // you 
    // console.log([1, 2, 3], ...'you', 'are'[1]) : 대괄호 하나씩 벗기기
  }
  c(a, b);
}


{
  // default 파라미터 문제 1. 아래 코드의 출력 결과는?
  function 함수(a = 5, b = a * 2) {
    console.log(a + b); // 9
    return 10
  }
  함수(3);
}


{
  // default 파라미터 문제 2. 위 코드의 출력 결과는 ?
  function 함수(a = 5, b = a * 2) {
    console.log(a + b); // 15
  }
  함수(undefined, undefined);
}


{
  /* 
    5. array를 만들어주는 함수를 제작하고 싶습니다.
    파라미터로 자료들을 입력하면 그걸 그대로 array를 만들어주는 함수를 만들고 싶습니다
    함수에 숫자를 100개 집어넣으면 Array안에 숫자100개가 들어가야하고요.
    어레이라는 함수를 어떻게 만들면 될까요 ? (new 키워드 사용금지)
    이렇게 작성하면[1, 2, 3, 4, 5]가 출력되어야합니다.
  */

  function 어레이(...rest) {
    return rest;
  }

  var newArray = 어레이(1, 2, 3, 4, 5);
  console.log(newArray); // [1, 2, 3, 4, 5]
}


{
  /* 
    6. 최댓값 구하기
    자바스크립트에서 최댓값을 구하고 싶으면.. Math.max()라는 기본 내장함수를 쓸 수 있습니다.
    numbers 안에 있는 숫자들을 Math.max()에 집어넣어서 쓰고 싶은데
    직접 소괄호 안에 10개넘는 숫자를 손수 기입하기 귀찮습니다.
    이럴 땐 어떻게 코드를 짜면 좋을까요?
  */

  var numbers = [2, 3, 4, 5, 6, 1, 3, 2, 5, 5, 4, 6, 7];
  console.log(Math.max(...numbers)); // 7
  console.log(Math.max.apply(null, numbers)); // 7

}


{
  /*
    7. 글자를 알파벳순으로 정렬해주는 함수를 만들고 싶습니다.
    일단 자바스크립트는 array 내의 데이터를 알파벳순으로 정렬하고 싶을 때
    sort()라는 array 내장함수를 붙여 사용합니다. (array에만 적용가능)
    그런데 우리는 array가 아니라 문자열에도 적용할 수 있는 알파벳순 정렬함수를 하나 만들고 싶습니다.
    정렬('bear')라고 사용하면
    콘솔창에 a b e r 이렇게 입력한 문자를 알파벳 순으로 출력되게 만들고 싶으면 어떻게 해야할까요?
    (sort() 함수 사용가능)
  */
  function 정렬(word) {
    console.log(...[...word].sort()); // a b e r
    console.log(word.split('').sort().join(" ")); // a b e r
  }
  정렬('bear');
}


{
  /*
    8. 데이터마이닝 기능 만들기
    데이터분석 하는 사람들이 자주 만들어 쓰는 함수가 있습니다.
    알파벳들의 출현 갯수를 세어주는 함수입니다. 우리도 한번 만들어봅시다.
    글자세기('aacbbb') 라고 입력하면 콘솔창에
    { a : 2, b : 3, c : 1 }
    ▲ 이렇게 출력해주는 글자세기() 라는 함수를 만들고 싶습니다.
    쉽게말하자면 입력한단어에 들어있는 알파벳의 갯수를 세어서 
    오브젝트에 기록해주고 출력까지 해주는 함수입니다.
    글자세기라는 함수를 어떻게 만들면 될까요?

    // 입력한 단어에 들어있는 알파벳 갯수를 센다
    // 기록을 해준다
    // 출력을 해준다
  */

  function 글자세기(words) {
    const result = {};
    [...words].forEach((word) => {
      // 만약에 결과에 a가 있으면 +1; 없으면 a : 1 집어넣으셈
      if (result[word]) {
        result[word] += 1;
      } else {
        result[word] = 1;
      }
    })
    console.log(result)
  }

  글자세기('aacbbb')
}

