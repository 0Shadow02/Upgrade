// NOW we will discuss about the async features in java_script 
// Async means asynchronous function 
const fs = require('fs');
print=()=>{
fs.readFile('a.txt', 'utf-8', function (err,data) {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
})
// fs.readFile(' text.txt', '  utf-8 ', (err, data) => { 
// console.log(err) })
}
console.log(print)