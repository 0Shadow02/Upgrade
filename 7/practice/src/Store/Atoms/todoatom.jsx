import { atomFamily } from "recoil";
import { Todos } from "../../Todo";

export const todoatom= atomFamily({
    key:"todoatom",
    default: id=>{ return Todos.find(todo=> todo.id===id) 

    }
})