import { RecoilRoot } from "recoil"
import { cardAtom } from "../Atom/CardAtom"
import { useRecoilValue } from 'recoil'
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function Card(){
    const cardvalue = useRecoilValue(cardAtom)
    if (!cardvalue || !cardvalue.title || !cardvalue.description || !cardvalue.interest) {
        return <div></div>; 
    }
    
    return  <div  style={{
        width: '370px',
        height: '256px',
        border: '2px solid grey',
        margin: 20,
        padding: 20,
        borderRadius: 5,
        backgroundColor: '#f0f0f0',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      }}>
        <h1>
        {cardvalue.title}
        </h1>
        <h2>
            {cardvalue.description}
        </h2>
        <h1>Interest:</h1>
        {cardvalue.interest === 0 ? 
                <h3>hello</h3> 
                : cardvalue.interest.map((inter) => <h3 key={inter}>{inter}</h3>)
            }
         
        <span>
           
        <button 
  onClick={() => { window.location.href = "https://www.linkedin.com/"; }} 
  style={{ 
    color: "black", 
    backgroundColor: 'aqua',
    padding: '10px 20px',
    borderRadius: '30px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textDecoration: 'none',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, background-color 0.3s, color 0.3s',
    margin: '5px',
    cursor: 'pointer',
    ':hover': {
        transform: 'translateY(-2px)',
        backgroundColor: '#45a049',
        color: 'white',
      }
  }}
>
  LinkedIn
</button>

<button 
  onClick={() => { window.location.href = "https://twitter.com/Fa6iKyo/status/1499333054963322883"; }} 
  
  style={{
     
    color: "black", 
    backgroundColor: 'aqua',
    padding: '10px 20px',
    borderRadius: '30px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textDecoration: 'none',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, background-color 0.3s, color 0.3s',
    margin: '5px',
    cursor: 'pointer',
    ':hover': {
        transform: 'translateY(-2px)',
        backgroundColor: '#45a049',
        color: 'white',
      }
  }}
>
  Twitter
</button>
           
        
        </span>
    </div>
        
       
}



// title
// description
// interests
// {button}
// linkendin
// twitter