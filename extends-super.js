
/*
  extends
  - class 상속한 class
  - class를 복사
*/

class 할아버지 {
  constructor(name) {
    this.성 = 'kim';
    this.이름 = name
  }

  sayHi() {
    console.log('안녕 저는 할아버지에요')
  }
}

class 아버지 extends 할아버지 {
  constructor(name, age) {
    super(name); // 부모 constructor를 의미
    this.나이 = age;
  }

  sayHi2() {
    console.log('안녕 저는 아버지에요')
    super.sayHi(); // 부모 clss의 prototype을 의미
  }
}

const 할아버지1 = new 할아버지('만덕');
const 아버지1 = new 아버지('만수', 80);

