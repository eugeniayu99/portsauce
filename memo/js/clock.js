const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `지금은 ${hours}시 ${minutes}분 ${seconds}초`;
}
getClock();
setInterval(getClock,1000);


/*날짜*/ 
const date = document.querySelector("#date-tit");
let today = new Date();
let days = ["일","월","화","수","목","금","토"]

date.innerText=`오늘은 ${today.getFullYear()}년 ${String(today.getMonth()+1).padStart(2,0)}월 ${String(today.getDate()).padStart(2,0)}일 ${days[today.getDay()]}요일`;












