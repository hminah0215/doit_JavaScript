// 피자 주문시 추가 주문 항목의 체크상자를 누르면 피자값에 체크한 항목의 금액만큼 
// 더해서 합계 항목에 표시하고, 체크상자를 해제하면 합계에서 그 금액만큼을 빠지게 표시

// 라지피자 24000원이라고 써져있음
var price = 24000;

var sideMenu = document.querySelectorAll(".checkbx");
var total = document.querySelector("#total");
total.value = price + "원";

for(var i=0; i < sideMenu.length; i++) {
    sideMenu[i].onclick = function() {
      if(this.checked == true) {
        price += parseInt(this.value);
      }
      else {
         price -= parseInt(this.value);        
      }
      total.value = price + "원";
    } 
}