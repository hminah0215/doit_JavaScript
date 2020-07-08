var check = document.querySelector("#shippingInfo");

check.addEventListener("click", function () {
    // cheked 속성은 체크 상자가 체크되면 그 값이 true가 된다.
    if (check.checked == true) {
        document.querySelector("#shippingName").value = document.querySelector("#billingName").value;
        document.querySelector("#shippingTel").value = document.querySelector("#billingTel").value;  // 주문 정보(전화번호)를 배송 정보(전화번호)에 복사
        document.querySelector("#shippingAddr").value = addrInfo = document.querySelector("#billingAddr").value;   // 주문 정보(주소)를 배송 정보(주소)에 복사
    }
    else {  // 체크되어 있지 않다면 배송 정보 필드를 지움.
        document.querySelector("#shippingName").value = "";
        document.querySelector("#shippingTel").value = "";
        document.querySelector("#shippingAddr").value = "";
    }

})