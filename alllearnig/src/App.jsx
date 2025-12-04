function App(){
  let product=[
    {
    product_name:" HP LAPTOP",
    product_price: 25000,
    product_brand:" HP",
    btn:"add to cart"
  },
  {
    product_name:" redmi c13",
    product_price: 12000,
    product_brand:" REDMI",
    btn:"add to cart"
  },
  {
    product_name:" sumsung",
    product_price: 24000,
    product_brand:" sumsung",
    btn:" add to cart"
  },


]
  return(
    <>
     <section style={{display:"flex", justifyContent:"space-cenetr"}}>
      {
        product.map((e)=>(
        <div>
          <h1>product_name{e.product_name}</h1>
          <h1>product_price{e.product_price}</h1>
          <h1>product_brand{e.product_brand}</h1>
          <h3>{e.btn}</h3>
        </div>
        ))
        }
     </section>
    </>
  )
}
export default App