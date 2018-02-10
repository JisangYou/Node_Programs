var myvar = require('./myvar'); // 모듈화된 해당 파일을 가지고와서,

console.log(myvar.a);// 해당 파일에 정의된 변수를 가져온다.

var setB = myvar.b(); // 해당 파일에 정의된 함수를 가져온다.
console.log(setB);

// var setVar = new myvar(); // 해당 파일에 정의된 객체를 가져온다. 
// console.log(setVar.name);