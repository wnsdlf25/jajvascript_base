// 자료형

// 문자형 String
const a = "Mike";
const age = 30;

// 문자열은 " " ' ' ` ` 로 감싸준다.
const name1 = "Mike";
const name2 = "Mike";
const name3 = `Mike`;

const message = "I'm a boy";
const message2 = "I'm a boy"; // 전부 작은 따움표(' ') 로 사용하려면 역슬래시(\) 를 사용한다
const message3 = `My name is ${a}`; // 백틱은 문자열 내부에 변수를 표현할 때 사용

// 숫자형 Number
const agee = 30;
const PI = 3.14;

console.log(1 + 2); // 더하기
console.log(10 - 3); // 뺴기
console.log(3 * 2); // 곱하기
console.log(6 / 3); // 나누기
console.log(6 % 4); // 나머지

// 숫자를 0으로 나누면 Infinity가 나온다.
const x = 1 / 0;
console.log(x); // -> Infinity

// 문자열을 나누면 NaN이 나온다
const y = "ad";
const z = y / 2;
console.log(z); // -> NaN

// Boolean
const aa = true; // 참
const bb = false; // 거짓

const name4 = "Mike";
const age2 = 30;

console.log(name4 == "Mike"); // -> trye
console.log(age2 > 40); // -> false

// null, undefined
// 변수 선언후 값을 할당 안할시 undefined를 출력
let age5;
console.log(age5); // -> undefined

// 변수에 null을 할당시 존재하지 않는다고 선언함

let user = null;
console.log(user); // -> null

// typeof 연산자
// 타입을 나타냄
const name6 = "Mike";

console.log(typeof 3); // -> number
console.log(typeof name6); // -> string
console.log(typeof true); // -> boolean
console.log(typeof "xxx"); // -> string
console.log(typeof null); // -> object, null은 객체가 아니지만 자바스크립트 오류로 object로 표시됨
console.log(typeof undefined); // -> undefined
