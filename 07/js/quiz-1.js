// 배열에있는 모근 요소를 더한 후 배열의 끝에 결과를 추가하는 프로그램	
var numbers = [2, 4, 6, 8, 10];

var sum = 0;

for (var i = 0; i < numbers.length; i++) {
	sum += numbers[i];
}
numbers.push(sum);

numbers();
