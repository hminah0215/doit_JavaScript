// 2. 아이디와 비밀번호, 비밀번호 확인 필드 가져오기 userId, pw1, pw2 변수 
var userId = document.querySelector("#user-id");
var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");

userId.onchange = checkId;
pw1.onchange = checkPw;
pw2.onchange = comparePw;

// 3. checkId() 함수 선언하기
function checkId() {
    // 3-1 아이디 필드 글자수에 조건설정하기
    if (userId.value.length < 4 || userId.value.length > 10) {
        // 3-2 조건을 만족하지 못할경우 오류 메시지 출력하기
        alert("4~10자리의 영문과 숫자를 사용하세요.");
        // 3-3 다시 입력할 수 있도록 아이디 필드 다시 선택하기  
        userId.select();
    }
}

// 이 부분 책에 문제가 잘못되어있음. 정오표 확인하고 다시 푼다.
// 4 checkPw, comparePw 함수선언
function checkPw() {
    if (pw1.value.length < 8) {
        alert("비밀번호는 8자리 이상이어야 합니다.");
        pw1.value = "";
        pw1.focus();  // 비밀번호를 다시 입력할 수 있게 포커싱
    }
}

function comparePw() {
    if (pw1.value != pw2.value) {
        alert("암호 틀렸어요. 다시 입력해주세요.");
        pw2.value = "";
        pw2.focus();   // 비밀번호를 다시 입력할 수 있게 포커싱
    }
}
