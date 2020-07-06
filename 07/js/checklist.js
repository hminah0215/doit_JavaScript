var itemList = [];

var addBtn = document.querySelector("#add"); // 아이디가 add인 요소를 가져와 저장
addBtn.addEventListener("click", addList);  // addBtn을 클릭하면 addList 함수 실행 

// 항목 추가 함수
function addList(){
    var item = document.querySelector("#item").value; // 아이디가 item인 텍스트 필드의 내용
    if(item != null){
        itemList.push(item); // itemList 배열 끝에 item 요소 추가

        document.querySelector("#item").value = ""; //id가 item인 요소값을 지움
        document.querySelector("#item").focus(); // 텍스트 필드에 focus() 함수 적용
        // focus()함수는 해당요소에 포커스를 주는 함수로 텍스트필드안에 커서를 가져다 놓는다.
    }
    showList();
}

// 리스트 보이게 하는 함수 
    function showList(){
        var list = "<ul>";
        for(var i = 0; i < itemList.length; i++){
            list += "<li>"+ itemList[i] +"<span class='close' id=" + i + ">X</span></li>";
        }
        list += "</ul>"

        document.querySelector("#itemList").innerHTML = list;

        // 삭제 버튼 
        var remove = document.querySelectorAll(".close"); // 클래스가 close 인것을 찾아 저장

        for(var i = 0 ; i < remove.length; i++){
            remove[i].addEventListener("click",removeList);
        }
    }

    // 챙긴 준비물을 목록에서 지우는 함수 
    function removeList(){
        var id = this.getAttribute("id"); //누른 삭제버튼의 id값을 가져온다

        itemList.splice(id, 1); // 인덱스값이 id 인 요소 1개를 삭제
        showList(); // 변경된 리스트를 다시 보여줌 
    }

