'use strict';

// for in
const obj = { name: 'kim', age: 30 }

for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(obj[key])
  }

}