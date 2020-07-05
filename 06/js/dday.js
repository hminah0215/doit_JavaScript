var now = new Date();

var firstDay = new Date("2020-01-01");  // 처음 만난 날의 날짜정보 

var toNow = now.getTime();          //오늘 날짜를 밀리초로 바꿈
var toFirst = firstDay.getTime();   // 처음만난 날은 밀리초로 바꿈 
var passedTime = toNow - toFirst;   // 처음만날 날과 오늘사이의 밀리초 차이

var passedDay = Math.round(passedTime / (1000 * 60 * 60 *24)); //밀리초를 날짜수로 변환 후 반올림 

document.querySelector("#accent").innerHTML = passedDay +'일';

// 계산하기 편하게 함수 추가
function caclDate(days){
    var future = toFirst + days * (1000 * 60 * 60 * 24); // 처음만난날에 100일 더하기 
    var someDay = new Date(future);
    
    var year = someDay.getFullYear(); // 연도를 가져옴
    var month = someDay.getMonth() + 1;
    var date = someDay.getDate();
    
    document.querySelector("#date" + days).innerHTML = year +"년 "+month +"월 " + date +"일";
}

caclDate(100);
caclDate(200);
caclDate(365);
caclDate(500);