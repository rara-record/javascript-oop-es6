'use strict';

/* 
  Map 자료형 만드는법 : 자료간의 연관성을 표현하기 위해 쓴다.
  object자료형은 자료 이름으로 글자만 가능
  Map 자료형은 다 가능 
*/
const person = new Map();
person.set('name', 'Kim')
person.set('age', '20')  // Map(2) {'name' => 'Kim', 'age' => '20'}
person.set(100, 200)
person.set([1, 2, 3, 4, 5], 'array')
person.set({ 'hobby': 'reading' }, 'object')

person.get('age')
person.delete('age')
person.size

// 반복문으로 Map에서 자료 꺼내는법
for (let key of person.keys()) {
  console.log(key)
}

// Map 자료형에 직접 자료 집어넣을때
const 강아지 = new Map([
  ['name', 'coco'],
  ['age', 5]
]);