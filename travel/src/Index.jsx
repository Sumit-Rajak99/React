import './App.css'
function Index() {
return (
<>

<section className="flex justify-center gap-2 bg-red-300 pt-10 pb-2">
<div>
    <img
    src="mountain.jpeg"
    alt=""
    className="h-50 w-64 shadow-md"
    />
</div>
<div>
    <img
    src="city.jpeg"
    alt=""
    className="h-50 w-64 shadow-md"
    />
</div>
<div>
    <img
    src="coast.jpeg"
    alt=""
    className="h-50 w-64 shadow-md"
    />
</div>
</section>


<section className="flex justify-center gap-2 bg-red-300 pb-33 mt-0">
<div className="w-64 bg-white shadow-md p-5">

<p className="text-xs font-semibold text-gray-400 text-center tracking-[4px]">TRAVEL</p>

<h1 className="text-2xl font-semibold text-center mt-2">Mountains</h1>

<p className="text-center text-gray-600 mt-3 leading-relaxed px-3">
Lorem ipsum dolor sit adipisicing elit. 
Laborum  amet consectetur fugit Reptaily
</p>

<div className="flex justify-center mt-4">
<button className="border-2 border-orange-400 text-orange-400 px-4 py-1 rounded-full">
Read more
</button>
</div>

</div>


<div className="w-64 bg-white shadow-md p-5">

<p className="text-xs font-semibold text-gray-400 text-center tracking-[4px]">TRAVEL</p>

<h1 className="text-2xl font-semibold text-center mt-2">City</h1>

<p className="text-center text-gray-600 mt-3 leading-relaxed px-3">
Lorem ipsum dolor sit adipisicing elit. 
Laborum  amet consectetur fugit Reptaily
</p>

<div className="flex justify-center mt-4">
<button className="border-2 border-orange-400 text-orange-400 px-4 py-1 rounded-full">
Read more
</button>
</div>

</div>

<div className="w-64 bg-white shadow-md p-5">

<p className="text-xs font-semibold text-gray-400 text-center tracking-[4px]">TRAVEL</p>

<h1 className="text-2xl font-semibold text-center mt-2">Coast</h1>

<p className="text-center text-gray-600 mt-3 leading-relaxed px-3">
Lorem ipsum dolor sit adipisicing elit. 
Laborum  amet consectetur fugit Reptaily
</p>

<div className="flex justify-center mt-4">
<button className="border-2 border-orange-400 text-orange-400 px-4 py-1 rounded-full">
Read more
</button>
</div>

</div>


</section>
</>
);
}

export default Index;
