import { selector } from "recoil";
import { countAtom } from "./count";

export const countSelector = selector({
   key: 'countSelector',
   get: ({get})=>{
    const text = get(countAtom)
    return text% 2 == 0 ? "It is Even": null
   }, 
}); 