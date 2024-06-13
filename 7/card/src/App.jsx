import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Cardinput } from './components/Cardinput'
import { Card } from './components/Card.jsx'
import { RecoilRoot, useRecoilValue } from 'recoil'


function App() {
  

return <> 
<RecoilRoot> 

<Cardinput> </Cardinput>
<Card >  </Card>
</RecoilRoot>
</>
}




export default App
