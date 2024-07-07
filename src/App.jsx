import Signup from "./Signup"
import Login from "./Login"
import { useState } from "react"
import Home from "./Components/Home"
<compone></compone>

function App() {
  
const [login, setLogin]= useState(true)

const updateLogin= (newState)=>{
  setLogin(newState)
}
  return (
    <div className={"w-screen h-screen flex justify-center items-center "}>

      {/* {
      login ? (<Login updateLogin={updateLogin}/>) : (<Signup  updateLogin={updateLogin}/>)
      } */}
       
       <Home/>
  
    </div>
  )
}

export default App
