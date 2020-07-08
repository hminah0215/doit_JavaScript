
// 신청자 명단을 표시 
function newRegister(){
    var newP = document.createElement("p");
    var userName = document.querySelector("#userName");
    var newText = document.createTextNode(userName.value);
    newP.appendChild(newText);

    // 이름 삭제하기 부분, 이름옆에 x 자 표시
    var delBttn = document.createElement("span");
    var delText = document.createTextNode("X");
    delBttn.setAttribute("class","del");
    delBttn.appendChild(delText);
    newP.appendChild(delBttn);

    var nameList = document.querySelector("#nameList");
   
    //nameList.appendChild(newP);

    //newP 노드를 nameList 맨 앞에 추가하는 소스 
    nameList.insertBefore(newP, nameList.childNodes[0]);

    userName.value = "";

    // 명단에서 이름삭제 
    var removeBttns = document.querySelectorAll(".del");

    for(var i=0; i < removeBttns.length; i ++){
        removeBttns[i].addEventListener("click",function(){
            // i번째 버튼을 눌렀을때 실행할 함수 선언 
            if(this.parentNode.parentNode){ // 현재 노드의 부모노드가 있을때만 실행
                this.parentNode.parentNode.removeChild(this.parentNode);
                // 부모 노드의 부모노드를 찾아서 현재 노드this 의 부모노드인 p를 삭제한다.
            }
        })
    }
}

