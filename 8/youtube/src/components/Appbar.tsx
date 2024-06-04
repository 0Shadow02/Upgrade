import { SearchBar } from "./Seachbar"


export const Appbar = ()=>{
    return <div className="flex justify-between p-2">
        <div className="text-md inline-flex items-center ">
            Youtube
        </div>
        <div>
            <SearchBar></SearchBar>

        </div>
        <div>
            Signin
        </div>
    </div>
}