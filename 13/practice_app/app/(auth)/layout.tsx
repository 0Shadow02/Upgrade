import React from "react";

export default function({children}:{children:React.ReactNode}){
    return <div>
        <div className=" boreder-b py-4 px-2">
            appbar
        </div>
        {children}
    </div>
}