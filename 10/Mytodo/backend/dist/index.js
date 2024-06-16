"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Create User
function CreateUser(username, firstName, lastName, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.userData.create({
            data: {
                username,
                firstName,
                lastName,
                password,
            }
        });
        console.log(res);
    });
}
function UpdateUser(username_1, _a) {
    return __awaiter(this, arguments, void 0, function* (username, { firstName, lastName }) {
        const res = yield prisma.userData.update({
            where: { username },
            data: {
                firstName,
                lastName
            }
        });
        console.log(res);
    });
}
// UpdateUser("Shadow@gmail.com",{firstName:"Shadow",lastName:"Sama"})
// Get UserData 
function GetUserData(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.userData.findMany({
            where: { username },
        });
        console.log(res);
    });
}
// GetUserData("Shadow@gmail.com")
function GetAllUserData() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.userData.findMany({
            where: {},
        });
        console.log(res);
    });
}
// GetAllUserData()
function CreatTodo(title, description, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.mytodo.create({
            data: {
                title,
                description,
                userId
            }
        });
        console.log(res);
    });
}
// CreatTodo("Go to Gym","timings from 3pm to 5pm",2)
function OnclickDone(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.mytodo.update({
            where: { id },
            data: {
                done: true
            }
        });
    });
}
// OnclickDone(1)
function GetTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.mytodo.findMany({
            where: {},
        });
        console.log(res);
    });
}
GetTodos();
