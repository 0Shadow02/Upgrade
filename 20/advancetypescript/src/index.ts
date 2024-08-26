interface User {
	name: string;
	age: number;
}
type updatedprop = Pick<User,"age" >

function sumOfAge(user1: User, user2: updatedprop) {
  return user1.age + user2.age;
};

// Example usage
const result = sumOfAge({
	name: "harkirat",
	age: 20
}, {
	
	age: 21
});
console.log(result);