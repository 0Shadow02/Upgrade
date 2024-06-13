import { useState } from "react"
import { RecoilRoot, useSetRecoilState } from "recoil"
import { cardAtom } from "../Atom/CardAtom"

export function Cardinput(){
    const setcardcomponent= useSetRecoilState(cardAtom)
    const [title,settitle]= useState("")
    const [description,setdescription]= useState("")
    const [interest,setinterest]= useState([])
   
    return <>
    <RecoilRoot>

    <input type="text" placeholder="title" onChange={(e)=>{settitle(e.target.value)}}  style={{
          margin: 10,
          padding: 10,
          borderRadius: 5,
          border: '1px solid #ccc',
          width: 200,
        }} /> <br />
    <input type="text" placeholder="description" onChange={(e)=>{setdescription(e.target.value)}}  style={{
          margin: 10,
          padding: 10,
          borderRadius: 5,
          border: '1px solid #ccc',
          width: 200,
        }}/> <br />
    <label htmlFor="form">Interests:</label> <br />
    <textarea rows={4}  cols="50"
          value={interest.join('\n')} onChange={(e)=>{
            setinterest(e.target.value.split('\n'))
    }} > </textarea> <br />
    <button onClick={()=>
    {setcardcomponent({title:title,description:description, interest:interest})}

} >Create Card</button>
    </RecoilRoot>
    </>
}