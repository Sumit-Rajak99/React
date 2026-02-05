import { Route, Routes } from "react-router-dom"
import Signin from "./Signin"
import Login from "./Login"

function App(){
  
  return(
    <>
    <Routes>
      <Route index element={<Signin/>}/>
      <Route path="/login" element={<Login/>}/>

    </Routes>
    
    </>
  )
}
export default App