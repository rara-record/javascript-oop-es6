
/*
  생성자 함수 안에서의 this

  - 생성자 함수 안에서 쓰면, 새로 생성되는 오브젝트를 뜻한다.
  - 그 새로 생성되는 object는 instanse라고 한다
*/ 

class Machine {
  constructor (name) {
    this.name = name // instanse 
  }
}

const machine = new Machine('bora');
console.log(machine.name)