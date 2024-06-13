import { atomFamily } from "recoil";
import { TODOS } from "./todos";


export const todosAtom = atomFamily({
    key:"todoAtom",
    default: id=> {
        return TODOS.find(x=> x.id === id)
    },
});