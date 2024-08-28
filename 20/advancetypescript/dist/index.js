"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = __importDefault(require("zod"));
const myschema = zod_1.default.object({
    name: zod_1.default.string(),
    email: zod_1.default.string().email(),
    rollno: zod_1.default.number()
});
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
;
// const users: Users = {
//   'abc123': { id: 'abc123', name: 'John Doe' },
//   'xyz789': { id: 'xyz789', name: 'Jane Doe' },
// };
const zod_2 = require("zod");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Define the schema for profile update
const userProfileSchema = zod_2.z.object({
    name: zod_2.z.string().min(1, { message: "Name cannot be empty" }),
    email: zod_2.z.string().email({ message: "Invalid email format" }),
    age: zod_2.z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});
app.put("/user", (req, res) => {
    const { success } = userProfileSchema.safeParse(req.body);
    const updateBody = req.body; // how to assign a type to updateBody?
    if (!success) {
        res.status(411).json({});
        return;
    }
    // update database here
    res.json({
        message: "User updated"
    });
});
app.listen(3000);
