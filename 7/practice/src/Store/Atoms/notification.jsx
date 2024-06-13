import axios from "axios";
import { atom, selector } from "recoil";

export const NotificationAtom = atom({
    key:"notification",
    default: selector({
        key:"notficationselector",
        get: async({get})=>{
           const notification= await axios.get("https://sum-server.100xdevs.com/notifications")
           return notification.data
        }
    })
})
export const Totalnotification = selector({
    key:"selector",
    get:({get})=>{
        const Totalnotification=get(NotificationAtom)
        return Totalnotification.network+Totalnotification.notifications+Totalnotification.jobs+Totalnotification.messaging
    }
})