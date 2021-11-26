// class, extends, getter, setter 연습문제 5개

/*
  1. 직접 class 구조 만들어보기

  모든 고양이와 강아지 object들은 한살먹기() 라는 함수를 사용할 수 있습니다.
  (1) 한살먹기() 함수는 강아지 class로부터 생성된 오브젝트가 사용하면 콘솔창에 에러를 출력해주어야합니다.
  (2) 한살먹기() 함수는 고양이 class로 부터 생성된 오브젝트가 사용하면 현재 가지고있는 age 속성에 1을 더해주는 기능을 실행해야합니다.
  한살먹기 함수는 어떻게 만들면 좋을까요? (검색이 필요할 수 있습니다)
*/

class 강아지 {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
  한살먹기() {
    if (this instanceof 고양이) { // this가 고양이로부터 생성된 오브젝트인지 아닌지
      this.age++;
    }
  }
}
const 강아지1 = new 강아지('말티즈', 'white');
const 강아지2 = new 강아지('진돗개', 'brown');


class 고양이 extends 강아지 {
  constructor(type, color, age) {
    super(type, color);
    this.age = age;
  }
}
const 고양이1 = new 고양이('코숏', 'white', 5);
const 고양이2 = new 고양이('러시안블루', 'brown', 2);

/*
  2. get/set을 이용해봅시다

  자바스크립트로 간단한 게임 기능을 가진 오브젝트를 뽑는 class를 만들고 싶습니다.
  다음 조건에 따라 class를 만들어보세요. class 이름은 Unit이라고 합시다.
  (1) 모든 Unit의 인스턴스는 공격력, 체력 속성이 있으며 기본 공격력은 5, 기본 체력은 100으로 설정되어 있어야 합니다.
  (2) 모든 Unit의 인스턴스는 전투력을 측정해주는 battlePoint라는 getter가 있습니다.
  console.log( 인스턴스.battlePoint ) 이렇게 사용하면 현재 공격력과 체력을 더한 값을 콘솔창에 출력해주어야합니다.
  (3) 모든 Unit의 인스턴스는 heal이라는 setter가 있습니다.
  인스턴스.heal = 50 이렇게 사용하면 체력 속성이 50 증가해야합니다.
  *인스턴스는 class로부터 새로생성되는 오브젝트를 뜻합니다.
*/


class Unit {
  constructor(공격력 = 5, 체력 = 100) {
    this.공격력 = 공격력;
    this.체력 = 체력;
  }

  get battlePoint() {
    return this.공격력 + this.체력;
  }

  get heal() {
    return this.체력;
  }

  set heal(value) {
    this.체력 = value + 50;
  }
}
const 캐릭터1 = new Unit();
캐릭터1.heal = 50;

/*
  3. get/set을 이용해봅시다.

  (1) data 오브젝트안에 setter 역할 함수를 하나 만들어보십시오.
  setter 함수에 1,2,3,4 이렇게 아무 자연수나 파라미터로 입력하면
  홀수는 odd, 짝수는 even 이라는 속성에 array 형태로 저장되어야합니다.
  (2) data 오브젝트안에 getter 역할 함수를 하나 만들어보십시오.
  getter 함수를 사용하면 odd, even에 저장된 모든 데이터들이 숫자순으로 정렬되어 출력되어야합니다.

  예를 들면
  data.setter함수(1,2,3,4,5) 이렇게 입력하면
  data = { odd : [1,3,5], even : [2,4] }
  이렇게 저장이 되어야합니다.
  빨리 위의 역할을 하는 함수 두개를 data 오브젝트 내에 만들어보십시오.
*/

const data = {
  odd: [],
  even: [],

  alignNumber: function () {
    // const odd = this.odd;
    // const even = this.even;
    // const combine = odd.concat(even);
    // return combine.sort((odd, even) => {
    //   return odd - even;
    // })

    return this.odd.concat(this.even).sort(function (a, b) {
      return a - b;
    })

    // return [...this.odd, ...this.even].sort(function (a, b) {
    //   return a - b;
    // })
  },

  oddEvenNumber: function (...number) {
    number.forEach((num) => { // arrow function 안쓰면 this가 window
      if (num % 2 === 1) {
        this.odd.push(num)
      } else {
        this.even.push(num)
      }
    })
  }
}

data.oddEvenNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

