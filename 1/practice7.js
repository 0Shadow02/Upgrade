// write a program that reverses all the elements of the array
const junk=["joe", 34, "barry", 5, 1.23];
// junk.reverse()
// another method
const rev=[]

for (let i = 1; i < junk.length+1; i++) {
    let a = junk.length-i
    rev.push(junk[a]);
    
    

}

console.log(junk);
console.log(rev);
