// 여행에 필요한 준비물을 저장할 빈 배열 만들기
var itemList = [];

// [추가] 버튼의 클릭 이벤트와 addList() 함수를 실행 연결하기
var addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList);

// 빈 배열에 내용을 추가할 addList() 함수 만들기
function addList() {
    var item = document.querySelector("#item").value;

    if (item != null) {
        itemList.push(item);
        document.querySelector("#item").value = "";
        document.querySelector("#item").focus();
    }
    showList();
}

    // itemList 배열의 내용을 화면에 보여줄 showList 함수 
    function showList() {
       // HTML 태그 문자열을 저장할 list 변수 만들기
        var list = "<ul>";

        // for문을 사용하여 itemList배열의 요소를 차례로 가져온 후 li태그로 묶어 list 변수에 저장
        // 각항목을 표시하는 소스에 x버튼을 함께 표시하기 span
        for(var i = 0; i < itemList.length; i++){
            list += "<li>"+ itemList[i] +"<span class='close' id=" + i + ">X</span></li>";
        }
        list += "</ul>";

        document.querySelector("#itemList").innerHTML = list;

       // 삭제 버튼의 클릭 이벤트와 removeList 함수 실행 연결하기
        var remove = document.querySelectorAll(".close"); // 클래스가 close 인것을 찾아 저장

        for(var i = 0 ; i < remove.length; i++){
            remove[i].addEventListener("click",removeList);
        }
    }

    // 준비한 항목을 화면에서 삭제하는 removeList함수 만들기
    function removeList(){
        // 이벤트가 발생한 삭제버튼의 id값 알아내기 
        var id = this.getAttribute("id"); 

        // splice() 함수를 사용해 해당 id 값이 가리키는 itemList배열의 요소 삭제하기
        itemList.splice(id, 1); 

        // showList() 함수를 사용해 변경된 배열을 화면에 표시하기
        showList(); 
    }

