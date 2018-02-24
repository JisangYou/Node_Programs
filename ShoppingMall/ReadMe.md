# 수업명

- shopping mall 만들기 수업

## 수업 내용

## Code Review


2018/02/24

```javaScript
function testMiddleWare(req, res,next){ // 함수를 만든 것을 미들웨어로 활용가능 하며, app.js에서도 만들어서 라우팅시 설정 가능.
    console.log('middleware on');
    next();
}

//...생략

router.post('/products/write', upload.single('thumnail'), csrfProtection, function (req, res) {
// 미들웨어 설정하는 방법 및 사용법
//.. 중략
});

```

## 보충설명


### 출처


## TODO


2018/02/08

1. javascript 문법 공부

2018/02/10

1. 개발환경 세팅 및 dependency, package.json이란?
2. npm이란
3. 웹환경에서의 mvc 패턴

2018/02/22

1. redirect, render의 개념
2. CRUD 게시판 복습
3. view controller model간의 흐름 복습

2018/02/24

1. app use의 의미
2. 미들웨어의 사용법 및 확장해서 생각해보기
3. app.js의 세팅된 문법들의 의미 파악
4. app.set의 의미와 view engine


## Retrospect

## Output
