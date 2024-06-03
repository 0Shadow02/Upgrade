function sum(num1,num2,funtocall) {
    let result = num1 + num2;
    funtocall( result);
}
function displayResult(data){
    console.log("Result of the sum is: "+ data);

}
function displayResultPassive(data){
    console.log("Sum's result is : "+ data);
}
// console.log(displayResult(sum(2,3)));
console.log(sum(1,2,displayResultPassive))