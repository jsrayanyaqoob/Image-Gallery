function SearchBar({
search,
setSearch,
searchImages
}){

return(

<div className="flex justify-center mb-12">

<div className="
flex
bg-white/10
backdrop-blur-md
border
border-white/20
rounded-full
overflow-hidden
w-[700px]
shadow-2xl
">

<input
className="
bg-transparent
flex-1
outline-none
px-6
py-4
text-white
placeholder:text-gray-400
"
placeholder="Search stunning images..."
value={search}
onChange={(e)=>
setSearch(e.target.value)
}
onKeyDown={(e)=>{

if(e.key==="Enter"){
searchImages()
}

}}
/>

<button
onClick={searchImages}
className="
bg-gradient-to-r
from-purple-600
to-fuchsia-500
px-8
text-white
font-semibold
hover:scale-105
duration-300
cursor-pointer
"
>

Search

</button>

</div>

</div>

)

}

export default SearchBar