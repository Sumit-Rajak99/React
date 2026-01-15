function Child2(props){
    return(
        <>
        <h1> this is Child 2 page </h1>
        <h1>{props.city} age= {props.age} {props.course}</h1>
        </>
    )
}
export default Child2