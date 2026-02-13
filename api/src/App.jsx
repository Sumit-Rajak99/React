import axios from "axios"
import { useEffect, useState } from "react"

function App() {
  const [apidata, setapidata] = useState([])

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => setapidata(res.data))
  }, [])

  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>

        <tbody>
          {apidata.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
