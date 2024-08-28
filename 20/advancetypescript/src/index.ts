import zod from "zod"
const myschema = zod.object({
  name: zod.string(),
  email:zod.string().email(),
  rollno:zod.number()
})
interface User {
	name: string;
	age: number;
}
type updatedprop = Pick<User,"age" >

function sumOfAge(user1: User, user2: updatedprop) {
  return user1.age + user2.age;
};

// Example usage
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
  // const users: Users = {
  //   'abc123': { id: 'abc123', name: 'John Doe' },
  //   'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  // };
import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);