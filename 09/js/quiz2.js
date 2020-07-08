// 반지름 텍스트 필드에 원의 반지름 값을 입력 후 계산을 누르면 
// 원의 둘레와 넓이를 계산해서 원둘레필드와 원넓이 필드에 계산한 값이 나오도록!
// 원둘레 : 반지름 * 파이 * 2
// 원넓이 : 반지름 * 반지름 * 파이
var radius = document.querySelector("#radius");
var start = document.querySelector("#start");

start.addEventListener("click", function () {
    document.querySelector("#round").value = Number(radius.value) * Math.PI * 2;
    document.querySelector("#area").value = Number(radius.value)* Number(radius.value) * Math.PI  ;
});
