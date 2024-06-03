// date function
// d = new Date()
// console.log(d)
// console.log("Month:",d.getMonth()+1)
// console.log("Day:",d.getDay())
// console.log("Year:",d.getFullYear())
// console.log("Time:",d.getTime())
// let a = 0;
// function jk(n){
// for (let i = 0; i < n; i++) {
//     a = a + i
    
// }
// return a;
// }
// let beforeDate = new Date()
// let beforeTimeinmls = beforeDate.getTime();
// jk(10000000000);
// let afterDate = new Date()
// let afterTimeinmls = afterDate.getTime();
// console.log(afterTimeinmls - beforeTimeinmls);

// function countTime( ) {
//     document.getElementById("demo").innerHTML=((new Date().getHours())-12)+ ":"+new Date().getSeconds();

// }
// setInterval(countTime, 1000);
function countTime() {
    let hours = new Date().getHours();
    let meridiem = (hours >= 12) ? "PM" : "AM";
    hours = (hours > 12) ? hours - 12 : hours;
    hours = (hours == 0) ? 12 : hours;
    let timeIn12HourFormat = hours + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + " " + meridiem;
    document.getElementById("demo").innerHTML = timeIn12HourFormat;
}

setInterval(countTime, 1000);
