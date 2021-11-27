'use strict';

/*
  Set 자료형  
  중복 자료를 허용하지 않는 Array 비슷한것
*/
const 출석부 = ['john', 'tom', 'andy', 'tom'];
const 출석부2 = new Set(['john', 'tom', 'andy', 'tom']);

출석부2.add('sally');
출석부2.delete('sally');
출석부2.has('sally');
출석부2.size

// Set 자료형 <-> Array 자료형
// 활용문제 : Array의 중복자료를 제거하고 싶다면?
let 강아지1 = ['coco', 'coco2', 'coco3', 'coco']
let 강아지2 = new Set(강아지1)
강아지1 = [...강아지2];

