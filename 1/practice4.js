// write a program prints all the even no in tthe array
const mynum = [1,2,3,4,5,6,7,8,9,10]
const even = []
for (let i = 0; i < mynum.length; i++) {
    if (mynum[i]%2==0) {
        even.push(mynum[i])
    
    }
    
}
document.getElementById("demo").innerHTML= even;