// 아래 실행결과를 예측하고 map과 forEach의 차이점을 설명하시오.
var items = ['1', '2', '3', '4', '5'];


//리턴되는 것을 모아서 새로운 배열을 리턴
//immutable 함수
var newItems = items.map(item => parseInt(item));
console.log(newItems);

//루프만 돈다
//immutable 함수 X
var newItems2 = items.forEach(item => parseInt(item));
console.log(newItems2);