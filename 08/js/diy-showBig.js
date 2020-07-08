//2. 큰 이미지와 작은 이미지를 가져와 변수로 저장한다. 
var bigPic = document.getElementById("cup");
var smallPics = document.querySelectorAll(".small");

// 3. 작은 이미지를 마우스로 누르면 showBig()함수를 실행시킨다
for(var i =0; i < smallPics.length; i++){
    smallPics[i].addEventListener("click",showBig);
}

// 4. showBig() 함수를 작성한다. 
// 마우스로 누른 작은 이미지의 파일경로를 큰 이미지의 파일경로로 지정
function showBig(){
    bigPic.setAttribute("src",this.src);
}