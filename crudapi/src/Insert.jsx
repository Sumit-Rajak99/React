import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
function Insert(){
    let navigate=useNavigate()
    let [frmdata,setfrmadata]=useState({name:"",age:"",contact:"",city:""})

    function indputdata(e){
        const {name,value}=e.target
        setfrmadata({...frmdata,[name]:value})
    }
    function submit(e){
        e.preventDefault()
        axios.post('http://localhost:3000/userdata',frmdata)
        .then((e)=>alert("done"))
        navigate('/Fetch')
    }
    return(
        <>
        <h1>this is insert page</h1>
        <form onSubmit={submit}>

        <label htmlFor="">Name</label>
        <input type="text" name="name" onChange={indputdata} /> <br /><br />
        <label htmlFor="">age</label>
        <input type="text" name="age" onChange={indputdata} /> <br /><br />
        <label htmlFor="">contact</label>
        <input type="text" name="contact" onChange={indputdata} /> <br /><br />
        <label htmlFor="">city</label>
        <input type="text" name="city" onChange={indputdata} /> <br /><br />
        <input type="submit"  />
        </form>
        </>
    )
}
export default Insert