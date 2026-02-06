import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

function Login(){
    let [loginfrm,loginsetfrm]=useState({
        email:"",password:""
    })
    let navigator=useNavigate()

    function logindata(e){
    const {name,value}=e.target 
    loginsetfrm({...loginfrm,[name]:value})

    }
  function loginhandle(e){
    e.preventDefault()
    let localdata=JSON.parse(localStorage.getItem("userdata"))
    if(loginfrm.email!=localdata.email || loginfrm.password!=localdata.password){
        alert("user not found")
    }
    else{
        alert("welcome")
    }
  }
    return(
        <>
        <h1>this is login page</h1>
        <form onSubmit={loginhandle}>
            <label htmlFor="">email</label>
            <input type="email" name="email" onChange={logindata} /><br /><br />
            <label htmlFor="">password</label>
            <input type="text" name="password" onChange={logindata} /> <br /><br />
            <input type="submit" />
        </form>
        </>
    )
}
export default Login 