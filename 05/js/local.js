var myVar = 100; // 전역변수
test();
document.write("myVar is " + myVar);

function test() { 			
	var myVar = 50; // 지역변수
}