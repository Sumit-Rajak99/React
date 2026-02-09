import { dataobject } from "./App"

function Child2(){
    return(
        <>
        <h1>this is child 2</h1>
        <dataobject.Consumer>

        {
            (data)=>{
                return <h1>i am {  data.name}{data.age}{data.city}{data.contact}{data.course} </h1>
            }
        }
        </dataobject.Consumer>
        
        </>
    )
}
export default Child2
