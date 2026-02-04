import { useState } from "react";

function Form() {

    let [frmdata,setdata]=useState({
        username:"",age:"",city:""
    })

    function inputdata(event){
        let {name,value}=event.target
        setdata({...frmdata,[name]:value})
    }
function handlesubmit(e){
         e.preventDefault()
        console.log(frmdata)

}


  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow p-4">

              <h3 className="text-center mb-4">This is Form Page</h3>

              <form onSubmit={handlesubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="username" 
                    placeholder="Enter name" 
                    onChange={inputdata}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">City</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="city" 
                    placeholder="Enter city" 
                    onChange={inputdata}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Age</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    name="age" 
                    placeholder="Enter age"
                    onChange={inputdata} 
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
