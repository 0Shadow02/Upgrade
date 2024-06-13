import { useNavigate } from "react-router-dom"


export const Landing = ()=>{
   
    return <div> Landing page </div>
}
export const Lbutton = ()=>{
    const navigate = useNavigate()
    return <> <button onClick={()=>navigate('/')}>Landing page</button></>
}