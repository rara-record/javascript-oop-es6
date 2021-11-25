'use strict'

/*
  spread operator 활용방법
  - opject, array 값복사
  - 함수 파라미터 넣을때
*/

function plus(a, b, c) {
  console.log(a + b + c)
}

const array = [10, 20, 30]
plus(array[0], array[1], array[2]) // 60 (주먹구구식)
plus.apply(undefined, array) // 60 (옛날방식)
plus(...array) // 60 (요즘방식)



// apply 개념 : person.인사()를 person2에 적용하고 싶을때
const person = {
  인사: function (number1, number2) {
    console.log(`${this.name} 안녕 ${number1}, ${number2}`)
  }
}

const person2 = {
  name: '보라'
  /*
   인사: function () {
    console.log(`${this.name} 안녕`)
  }
  */
}

person.인사(1, 2); // undefined 안녕
person.인사.apply(person2, [1, 2]) // 보라 안녕 : person.인사를 person2에 옮겨와서 실행해주세용
person.인사.call(person2, 1, 2)


