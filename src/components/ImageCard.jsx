function ImageCard({ image, isFav, toggleFav, openModal }) {

return (

<div
className="
group
relative
rounded-2xl
overflow-hidden
shadow-lg
bg-white/5
hover:shadow-2xl
transition-all
duration-500
hover:-translate-y-2
"
>

{/* IMAGE */}
<img
onClick={() => openModal(image)}
src={image?.urls?.regular}
className="
w-full
h-[220px]
object-cover
cursor-pointer
transition-all
duration-700
group-hover:scale-110
group-hover:brightness-75
"
/>

{/* INFO BAR */}
<div className="
flex
justify-between
items-center
p-4
text-white
">

<p className="text-sm opacity-70">
{image?.user?.name}
</p>

<button
onClick={() => toggleFav(image)}
className="
text-xl
transition-all
duration-300
hover:scale-125
"
>

{isFav ? "❤️" : "🤍"}

</button>

</div>

</div>

)

}

export default ImageCard