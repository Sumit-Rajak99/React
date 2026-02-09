import { createContext } from "react"
import Child1 from "./Child1"

let dataobject = createContext()

let person = {
  name: "sumit",
  age: 19,
  city: "bhopal",
  course: "fullstack",
  contact: 9926381513
}

function App() {
  return (
    <>
      <h1>this app page</h1>

      <dataobject.Provider value={person}>
        <Child1 />
      </dataobject.Provider>
    </>
  )
}

export default App
export { dataobject }
