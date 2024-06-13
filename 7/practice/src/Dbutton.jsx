import { useNavigate } from "react-router-dom"

export const Dbutton = ()=>{
    const navigate = useNavigate()
    return <> <button onClick={()=>navigate('/dashboard')}>Dashboard page</button></>
}