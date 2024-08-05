import axios from "axios";

import {atomFamily, selectorFamily } from "recoil";

export const todoatom = atomFamily({
    key: "todoatom",
    default: selectorFamily({
        key: "todoatomselector",
        get: (id) => async ({get}) => {
        const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
         return res.data.todo;
        }
    })
}) 