import axios from "axios";
import { useEffect } from "react";
import { atom, selector } from "recoil";

export const notifications = atom({
    key:"notification",
    default:selector({
      key: "notificationsselector",
      get: async ()=>{
        
        const res = await  axios.get("https://sum-server.100xdevs.com/notifications")
        return res.data
      }
        
    })
})

export const avatarselector = selector({
    key:" avatarselector",
    get: ({get})=>{
        const totalcount = get(notifications)
    

        return totalcount.network+totalcount.messaging+totalcount.jobs+ totalcount.notifications
    }
})














// export const networkAtom= atom({
//     key:"networkAtom",
//     default: 102
// })
// export const jobAtom= atom({
//     key:"jobAtom",
//     default: 0
// })
// export const notificationAtom= atom({
//     key:"notificationAtom",
//     default: 12
// })
// export const messagingAtom= atom({
//     key:"messagingAtom",
//     default: 0
// })
// export const avatarselector = selector({
//     key:" avatarselector",
//     get: ({get})=>{
//         const totalcount = get(networkAtom)+get(jobAtom)+get(notificationAtom)+get(messagingAtom)

//         return totalcount
//     }

// })