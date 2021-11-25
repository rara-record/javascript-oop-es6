
// prototype
function 나는생성자함수(name, age) {
  this.name = name;
  this.age = age;
}

나는생성자함수.prototype.gender = '남';

const 학생1 = new 나는생성자함수('Kim', 15);
const 학생2 = new 나는생성자함수('Park', 16);

console.log(학생1, 학생2) // instance
console.log(학생1.gender, 학생2.gender) // 나는생성자함수에서 생성되는 모든 자식들은 gender라는 속성을 사용할 수 있다
console.log(나는생성자함수.prototype)



// __proto__를 이용하여 부모님 강제 등록하기 (실제로 쓰이진 xx)
const 부모 = { name: 'Kim' }
const 자식 = {};

자식.__proto__ = 부모;
console.log(자식.name); // 'kim'


// constructor, prototype 연습문제 4개
{
  function Student(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function () {
      console.log(`$안녕 나는 ${this.name}이야`)
    }
  }
  const 학생1 = new Student('Kim', 20);
  const 학생2 = new Student('Park', 21);
  const 학생3 = new Student('Lee', 22);
  console.log(학생1, 학생2, 학생3)
  학생1.sayHi()
  학생2.sayHi()
  학생3.sayHi()
}

{
  function Parent() {
    this.name = 'Kim';
  }
  var a = new Parent();
  a.__proto__.name = 'Park'; // 부모의 prototype에 { name : 'Park' } 추가
  console.log(a.name) // 'Kim'
  console.log(Parent.prototype) // {name: 'Park', constructor: ƒ}
  console.log(Parent.prototype.name) // 'Park'
  console.log(a.__proto__.name) // 'Park'
  a.__proto__.age = 29;
  var b = new Parent();
  console.log(b.age) // 29
}

{
  function Student(이름, 나이) {
    this.name = 이름;
    this.age = 나이;
  }

  Student.prototype.sayHi = () => {
    console.log('안녕 나는 ' + this.name + '이야');
  }
  const 학생1 = new Student('Kim', 20);

  학생1.sayHi(); //왜 이 코드가 제대로 안나올까요?

  // arrow function은 this를 바깥에 있는 this를 그대로 사용하고 싶을 때 쓰는 함수이기 떄문에, 
  // sayHi() 함수 안에 this값이 이상해져서임. 
}

{
  // 나만의 내장함수 만들깅! 자주 사용할법한 내장함수들을 많이 만들어두면 효율적인 코딩 가능
  // 함수를 호출할때 어떤 data를 넘겨주면 그 데이터를 삭제해주는 함수
  Array.prototype.remove = function (data) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] === data) {
        this.splice(i, 1)
      }
    }
  };
  const arr = [1, 2, 3];
  arr.remove(2);
  console.log(arr);[1, 3]
}

