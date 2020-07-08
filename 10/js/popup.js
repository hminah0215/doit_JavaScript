function openPop(){
    var newWin = window.open("popup.html","","width=400, height=400");

    // 팝업이 차단되어 있다면 if문 실행
    if(newWin == null){
        alert("팝업이 차단되어 있습니다. 차단해제 후 새로고침 해주세요");
    }
}
// 문서를 불러오자 마자 실행해야 한다.
window.onload = openPop;
