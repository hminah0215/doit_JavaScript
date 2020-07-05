var now = new Date();
var firstDay = new Date("2020-06-12");

var toNow = now.getTime();
var toFirst = firstDay.getTime();

var passedDay = Math.round((toNow - toFirst)/(1000 * 60 * 60 *24));

document.querySelector("#accent").innerHTML = passedDay +"일";


calcDate(100);
calcDate(200);



function calcDate(days){
    var future = toFirst + days * (1000 * 60 * 60 * 24); // 처음만난날에 100일 더하기 
    var someDay = new Date(future);
    
    var year = someDay.getFullYear(); // 연도를 가져옴
    var month = someDay.getMonth() + 1;
    var date = someDay.getDate();
    
    document.querySelector("#date" + days).innerHTML = year +"년 "+month +"월 " + date +"일";
}