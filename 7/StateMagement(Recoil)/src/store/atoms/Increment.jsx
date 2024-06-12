import { useSetRecoilState } from "recoil";

export function Increment(){
    const Incrementcount = useSetRecoilState(Atomics)
    return <> <div>
        <button onClick={()=>{
            Incrementcount(c=>c+1)
        }}>Increment</button>
        </div></>
}