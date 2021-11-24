
/*
  this keyword 2
  
  - 나를 담고 있는 Object를 출력
  - arrow function은 this를 가지지 못함 
    -> 내부의 this값을 변화시키지 않음. 재설정 x
    -> 외부this값 그대로 재사용 가능
*/

const object = {
  data : {
    이름 : '김보라',
    age() {
      console.log(this); // {이름: '김보라', age: ƒ}
    },
    hobby : () => {
      console.log(this); // window {}
    }
  }
}

console.log(object.data); // {이름: '김보라', age: ƒ}


{
  // Case study 1 : 오브젝트 내 콜백함수 안에서의 this
  const thisIntheObject = {
    names : ['bora', 'coco', 'taehyen'],
    whatThis : function () {
      console.log(this) // thisIntheObject : whatThis 함수의 주인
      thisIntheObject.names.forEach(function () {
        console.log(this) // window || 'use strict' 쓰면 undifined
      })
    }
  }
  thisIntheObject.whatThis();
}


{
  // Case study 2 : 오브젝트 내 화살표 함수내에서의 this
  const thisIntheObject = {
    names : ['bora', 'coco', 'taehyen'],
    whatThis : function () {
      console.log(this) // thisIntheObject
      thisIntheObject.names.forEach(() => {
        console.log(this) // 상위 this값 물려받음 thisIntheObject
      })
    }
  }
  thisIntheObject.whatThis();
}


