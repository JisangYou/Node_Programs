var a = "hello";
module.exports.a = a; 
// 변수를 내보낸다는 의미
module.exports.b = function(){
    return "Return function";
};
// 함수를 내보낸다는 의미.

// function Myvar(){
//     this.name = "my Instance";
// }
// module.exports = Myvar;
// 함수안에 있는 변수를 내보낸다는 의미.