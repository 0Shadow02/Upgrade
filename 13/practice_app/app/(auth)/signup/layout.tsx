import { Children } from "react";

export default function({children}:{children:React.ReactNode}){
    return <div>
               <div className="bg-red-200 text-center">
                   20% discount for users who login/signup within 2 days !
               </div>
        {children}
    </div>
}