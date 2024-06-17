import Button, { BigButton } from "../sub-components/buttons";
import { Logo } from "../sub-components/logo";
import { Search } from "../sub-components/searchbar";

export function Appbar(){
    return <div className=" flex justify-between h-14  bg-daily  border-b-zinc-600 border-b-2 sticky top-0 ">
        <Logo></Logo>
        <Search></Search>
        <Button></Button>
        <BigButton></BigButton>
        
    </div>
}