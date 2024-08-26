// interface User {
// 	name: string;
// 	age: number;
// }
// type updatedprop = Pick<User,"age" >

// function sumOfAge(user1: User, user2: updatedprop) {
//   return user1.age + user2.age;
// };

// // Example usage
// const result = sumOfAge({
// 	name: "harkirat",
// 	age: 20
// }, {
	
// 	age: 21
// });
// console.log(result);

interface User {
    id: string;
    name: string;
  }

  type Users = { [key:string] :User }
  const users: Users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  };