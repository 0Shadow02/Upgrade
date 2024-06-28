"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: "shadow", age: 20 }, { name: "dragon", age: 22 });
console.log(age);
