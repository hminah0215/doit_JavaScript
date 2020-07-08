// 3. 체크 상자 요소 가져오기 
var check = document.querySelector("#shippingInfo");

// 4. 체크 요소에 클릭 이벤트 발생시 실행할 함수 선언하기
check.addEventListener("click", function () {
    // 2.주문 정보의 각 필드 값 가져오기 nameInfo, tellInfo, addrInfo 변수
    var nameInfo = document.querySelector("#billingName").value;  // 주문 정보 - 이름
    var telInfo = document.querySelector("#billingTel").value;  // 주문 정보 - 전화번호  
    var addrInfo = document.querySelector("#billingAddr").value;  // 주문 정보 - 주소

    // 5. 체크상자를 체크 했다면 2에서 가져온 값을 배송정보에 저장하기
    if (check.checked == true) {
        document.querySelector("#shippingName").value = nameInfo;
        document.querySelector("#shippingTel").value = telInfo;
        document.querySelector("#shippingAddr").value = addrInfo;
    } else { // 체크하지 않았다면 비어두기
        document.querySelector("#shippingName").value = "";
        document.querySelector("#shippingTel").value = "";
        document.querySelector("#shippingAddr").value = "";
    }

});

