
// 아래는 함수 선언문(function definition)이다. 함수 표현식으로 바꾸시오.
// 함수 선언문과 함수 표현식의 차이점은 무엇인가? 표현식으로 바꾸면 에러가 나는가 안나는가?

const myName = function (first, last) {
	console.log(first + last);
}

//익명함수를 애로우 function으로 변경가능
//입력과 출력사이 => 삽입, function 생략
const myName2 = (first, last) => {
	console.log(first + last);
}

//문장이 한무장이면 {}생략 가능. return 도 생략가능.
myName("Yan", "Fan");
myName2("Lee", "Youjin");
