import axios from "axios"
import { useEffect, useState } from "react"

function Fetch() {

  const [apidata, setapidata] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/userdata")
      .then((res) => {
        setapidata(res.data)
      })
      
  }, [])

  return (
    <>
    <h1>fetch page</h1>
      <h2>User Data</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Contact</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {apidata.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.contact}</td>
              <td>{e.city}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </>
  )
}

export default Fetch
