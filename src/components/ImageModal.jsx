function ImageModal({
selectedImage,
setSelectedImage
}){

if(selectedImage === null){

return null

}

return(

<div
onClick={()=>
setSelectedImage(null)
}
className="
fixed
inset-0
bg-black/90
backdrop-blur-sm
flex
justify-center
items-center
z-50
p-5
"
>

<div
onClick={(e)=>
e.stopPropagation()
}
className="
relative
max-w-6xl
w-full
"
>

<button
onClick={()=>
setSelectedImage(null)
}
className="
absolute
top-4
right-4
w-10
h-10
rounded-full
bg-white/20
text-white
z-50
cursor-pointer
"
>

✕

</button>

<img
src={selectedImage?.urls?.regular}
className="
w-full
max-h-[85vh]
object-contain
rounded-2xl
"
/>

<div
className="
absolute
bottom-0
left-0
w-full
p-6
bg-gradient-to-t
from-black
to-transparent
"
>

<h2 className="text-white text-xl font-bold">

{selectedImage?.user?.name}

</h2>

<p className="text-gray-300">

{selectedImage?.alt_description}

</p>

</div>

</div>

</div>

)

}

export default ImageModal