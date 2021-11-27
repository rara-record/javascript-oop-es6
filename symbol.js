'use strict';

// symbol의 용도 : object 자료형의 비밀스런 key값
// 오브젝트 안에 주석달기
// es6 부터 key값에 symbol저장가능
const 심볼 = Symbol('설명');
const weight = Symbol('내 시크릿 몸무게임')
const height = Symbol('내 시크릿 키임')

const person = { name: '보라', age: 29, [height]: 160 }
person['weight'] = 100; // 기본 키값 저장
person[weight] = 200; // 심볼 키값 저장

for (let key in person) {
  console.log(key)
  console.log(person[key])
}

// 특징1. 설명이 같다고 같은 symbol이 아니다.
const a = Symbol('설명')
const b = Symbol('설명')
console.log(a === b) // false

// 특징2. 전역 변수같은 전역 Symbol
const c = Symbol.for('설명');
const d = Symbol.for('설명');
console.log(c === d) // ture
