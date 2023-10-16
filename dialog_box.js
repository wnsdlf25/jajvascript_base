// 대화상자
// alert
// 알림창

alert("hello"); // -> hello

// prompt
// 값을 입력받을 때 사용

const name = prompt("이름을 입력하시오");
alert(name + "님" + " " + "안녕하세요"); // -> " "님 안녕하세요

// confirm
// 확인 받을 때 사용

const isAdult = confirm("당신은 성인 입니까?");
console.log(isAdult); // -> 확인을 누를경우 true 아닐경우 false

// 단점
// 1. 스크립트 일시 정지
// 2. 스타일링 불가능
