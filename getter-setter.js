

/*
  함수를 만들어서 object 데이터를 다루는 이유
  1. object자료가 복잡할때 이득
  2. 데이터를 꺼내거나 수정할때 실수를 방지, 관리가 편함

  get은 데이터를 가져와주는, get해주는 함수들에 쓰면 됨 (return필수, 파라미터x)
  sett은 데이터를 입력, 수정 변경하는 함수에 쓰면 됨(파라미터는 1개만)
*/



class 사람 {
  constructor(name, age) {
    this.name = name;
    this.setAge = age;
  }
  get nextAge() {
    return this.setAge + 1;
  }

  set setAge(data) {
    if (isNaN(data)) console.log('숫자입력하라고')
    this.age = parseInt(data)
  }
}

const 사람1 = new 사람('보라', '20');



// const 사람 = {
//   name: 'kim',
//   age: 30,
//   get nextAge() {
//     return this.age + 1; // return 필수!
//   },
//   set setAge(data) {
//     if (isNaN(data)) console.log('숫자입력하라고')
//     this.age = parseInt(data)
//   }
// }
// 사람.setAge = '90';
// console.log(사람) // {name: 'kim', age: 90}
// 사람.nextAge; // 91
