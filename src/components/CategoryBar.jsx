function CategoryBar({ searchImages }) {

const categories = [
"Nature",
"Cars",
"Tech",
"Gaming",
"Animals",
"Space",
"People"
]

return (

<div className="flex flex-wrap justify-center gap-3 mb-10 mt-4">

{categories.map((cat) => (

<button
key={cat}
onClick={() => searchImages(cat)}
className="
px-5
py-2
rounded-full
bg-white/10
text-white
border
cursor-pointer
border-white/20
hover:bg-purple-600
hover:scale-105
duration-300
"
>

{cat}

</button>

))}

</div>

)

}

export default CategoryBar