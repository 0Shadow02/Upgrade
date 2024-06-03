// write a program to print the biggest no in the array
const mynum = [100, 202, 3, 4, 5, 88, 96, 44, 9]
let bn = 0;
mynum.sort(function (a, b) { return a - b })
for (let i = 0; i < mynum.length; i++) {
    a = mynum[i + 1]
    b = mynum[i]
    function bnum(mynum) {
        return a - b;
    }
    if (bnum() > 0) {
        bn = a;
    }

}
document.getElementById("demo").innerHTML = bn
// another more useful way -
// const mynum = [100,2,3,4,5,88,96,44,9];
// function fnum(mynum){
//  let maxnum = mynum[0];
//  for(let i=0; i<mynum.length; i++){
//  	if(mynum[i]>maxnum){ 
//     	maxnum= mynum[i];
//         }
//   }
//  return maxnum;}

// document.getElementById("demo").innerHTML=fnum(mynum)