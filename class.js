
// class의 상속기능 

class 부모 {
  constructor(name) {
    this.name = name;
    this.sayHi = function () { console.log('hi') } // 모든 자식이 공통적으로 가짐
  }

  sayHello() { // 나는야 메소드
    console.log('hello');
  } // 여기에 쓰면 부모.prototype에 추가
}

const 자식 = new 부모('bora');
자식.sayHi();
자식.sayHello();
console.log(자식.__proto__) // === 부모의 prototype : sayHi()
Object.getPrototypeOf(자식) // __proto__랑 똑같음
부모.prototype.date = '2021.11.26'
console.log(자식.date); // 2021.11.26