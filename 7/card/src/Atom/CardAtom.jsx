import { atom } from "recoil";

export const cardAtom = atom({
    key: "cardatom",
    default: {title:"",description:"" , interest:[]}
})