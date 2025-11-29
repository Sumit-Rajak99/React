function Burger() {
  return (
    <>
      <section className="m-10   ">
       
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
          Our Menu
        </h1>

        
        <div className="flex justify-center list-none gap-6 mb-10">
          <li className="border-2 border-red-400 text-red-500 px-4 py-1 rounded-2xl">
            Burger
          </li>
          <li className="border-2 border-gray-400 px-4 py-1 rounded-2xl ">
            Cake
          </li>
          <li className="border-2 border-gray-400 px-4 py-1 rounded-2xl ">
            Pizza
          </li>
          <li className="border-2 border-gray-400 px-4 py-1 rounded-2xl">
            Salads
          </li>
          <li className="border-2 border-gray-400 px-4 py-1 rounded-2xl">
            Drinks
          </li>
          <li className="border-2 border-gray-400 px-4 py-1 rounded-2xl ">
            Desserts
          </li>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
  
  <div className="p-4 flex flex-col h-full">
    <img src="burger2.jpg" className="rounded-xl w-full h-40 object-cover" />
    <p className="font-bold mt-2 text-center">Double Burger</p>
    <p className="text-red-600 font-bold text-center">$25.00</p>
  </div>

  <div className="p-4  flex flex-col h-full">
    <img src="burger4.jpg" className="rounded-xl w-full h-40 object-cover" />
    <p className="font-bold mt-2 text-center">Chicken Burger</p>
    <p className="text-red-600 font-bold text-center">$9.50</p>
  </div>

  <div className="p-4  border-2 border-gray-300 flex flex-col h-full">
    <img src="newburger.jpeg" className="rounded-xl w-full h-40 object-cover" />
    <p className="font-bold mt-2 text-center">Mexican Burger</p>
    <p className="text-sm text-gray-600 leading-5 text-center">
      A Mexican burger with Mexican spices, guacamole, pico de gallo,
      jalapeños & mixed cheese.
    </p>
    <p className="text-red-600 font-bold mt-1 text-center">$12.50</p>
    <button className="mt-2 bg-red-500 text-white  py-2 rounded-xl text-center ml-2"> ORDER ONLINE </button>
  </div>

  <div className="p-4  flex flex-col h-full">
    <img src="burger4.jpg" className="rounded-xl w-full h-40 object-cover" />
    <p className="mt-2 text-center font-bold">Mini Burger</p>
    <p className="text-red-600 font-bold text-center">$10.90</p>
  </div>

  <div className="p-4   flex flex-col h-full">
    <img src="burger2.jpg" className="rounded-xl w-full h-40 object-cover" />
    <p className="font-bold mt-2 text-center">Classic Burger</p>
    <p className="text-red-600 font-bold text-center">$13.90</p>
  </div>

</div>

        
      </section>
    </>
  );
}

export default Burger;
