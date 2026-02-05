import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
function Signin() {
    let [frmdata ,setfrmdata]=useState({
        name:"",age:"",email:"",password:""
    })
   let navigator=useNavigate()

   function inputdata(e){
    const{name,value}=e.target 
    setfrmdata({...frmdata,[name]:value})


   }

   function handlesubmit(e){
    e.preventDefault()
    localStorage.setItem("userdata",JSON.stringify(frmdata))
    navigator('./login')
   }
  return (
    <>
      <form className="form-box" onSubmit={handlesubmit}>
        <h1>Single Page Form</h1>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter name" onChange={inputdata} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter email" onChange={inputdata} />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" placeholder="Enter age" onChange={inputdata} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter password" onChange={inputdata} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Signin;
