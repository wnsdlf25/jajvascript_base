// 형변환
// 형변환을 하는 이유는 타입이 다르면 생각하지못한 오류나 값이 반환될 수 있다.
// ex) prompt로 받은 값은 숫자여도 문자형으로 변환이 되어 원하지 않는 값이 나올 수 있다.
// 나누기(/) 같은 경우 나누려는 대상이 문자형 이어도 숫자로 자도 형변환을 시킨다
// ex) "6" / 2 => 3
// 명시적 형변환을 하여 원하는 값을 반환한다

// String
// 괄호() 안에 타입을 문자형으로 변경
console.log(
  String(3),
  String(true),
  String(false),
  String(null),
  String(undefined),
  String("ad")
); // -> 3 true false null undefined ad

// Number
// 괄호() 안에 타입을 숫자형으로 변경
console.log(
  Number(3),
  Number(true),
  Number(false),
  Number(null),
  Number(undefined)
); // 3 1 0 0 NaN

// Boolean
// 괄호() 안에 타입을 불린형으로 변경

console.log(
  Boolean(1),
  Boolean(123),
  Boolean("dsaasd"),
  Boolean("true"),
  Boolean("false")
); // -> true true true true true

console.log(
  Boolean(0),
  Boolean(""),
  Boolean(null),
  Boolean(undefined),
  Boolean(NaN)
); // -> false false false false false
