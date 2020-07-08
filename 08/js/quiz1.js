// 텍스트 단락을 누르면 글자크기를 20px로 글자색을 blue로 바꾸고 배경색은 #ccc 로 지정할것

var myText = document.getElementById("myText");

myText.addEventListener("click", function () {
    myText.style.fontSize = "20px";
    myText.style.color = "blue";
    myText.style.backgroundColor = "#ccc";
})