import Child1 from "./Components/Child1"
import Child2 from "./Components/Child2"
function App(){
  return(
    <>
    <h1>this is app file page</h1>
    <hr />
    <Child1 name="sumit"/>
    <hr />

    <Child2 city="indore" course="fsd" age={20}/>
    </>
  )
}
export default App