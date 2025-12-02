import Child2 from "./Child2"
function Child1(props){
    return(
      <>
      <h1>{props.name}</h1> <hr />
      
      <Child2 intro="this is sid 2"/>
      </>
    )
}
export default Child1