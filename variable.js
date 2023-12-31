// 변수
a = "Mike";
age = 30;
// 자바스크립트 문자는 항상 " " , '' 로 감싸준다
// 변수명으로 예약어는 사용 불가능
// ex) case const delete false....

// 경고창을 띄우는 함수
alert(a); // => Mike

// 콘솔창에 출력
console.log(age); // => 30

// 이런식으로 변수를 설정하면 변수명이 겹치면 마지막 변수로 덮어씌워지기 때문에 const, let을 사용한다
// let은 선언 후 다른값으로 변경 가능
let b = "Jame";
b = "ami";

// const는 절대로 바뀌지 않는 상수, 수정이 불가능 하다
// const는 대문자로 선언하는것이 좋음
const C = "momo";

// 정리
// 변수는 문자와 숫자, $와_만 사용
// 첫글자는 숫자가 될 수 없다
// 예약어는 사용 불가능
// 가급적 상수는 대문자로 사용
// 변수명은 읽기 쉽고 이해할 수 있게 선언
