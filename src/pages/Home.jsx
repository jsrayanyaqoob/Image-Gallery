import { useState, useEffect, useRef } from "react"

import SearchBar from "../components/SearchBar"
import ImageCard from "../components/ImageCard"
import ImageModal from "../components/ImageModal"
import CategoryBar from "../components/CategoryBar"
import Navbar from "../components/Navbar"

function Home() {

const [images, setImages] = useState([])
const [search, setSearch] = useState("")
const [page, setPage] = useState(1)
const [loading, setLoading] = useState(false)
const [selectedImage, setSelectedImage] = useState(null)

const [favorites, setFavorites] = useState(
JSON.parse(localStorage.getItem("fav")) || []
)

const loaderRef = useRef(null)

const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY


useEffect(() => {
localStorage.setItem("fav", JSON.stringify(favorites))
}, [favorites])


// FETCH IMAGES
async function fetchImages(reset = false, query = search, pageNum = page) {

setLoading(true)

const url = query
? `https://api.unsplash.com/search/photos?query=${query}&page=${pageNum}&client_id=${API_KEY}`
: `https://api.unsplash.com/photos?page=${pageNum}&client_id=${API_KEY}`

const res = await fetch(url)
const data = await res.json()

const newImages = data.results || data

setImages(prev =>
reset ? newImages : [...prev, ...newImages]
)

setLoading(false)
}


// SEARCH
function searchImages(queryText) {

setPage(1)
setImages([])
setSearch(queryText || "")
fetchImages(true, queryText || "", 1)

}


// FAVORITES
function toggleFav(image) {

const exists = favorites.find(f => f.id === image.id)

if (exists) {
setFavorites(favorites.filter(f => f.id !== image.id))
} else {
setFavorites([...favorites, image])
}

}


// INFINITE SCROLL
useEffect(() => {

const observer = new IntersectionObserver(entries => {

if (entries[0].isIntersecting && !loading) {
setPage(prev => prev + 1)
}

})

if (loaderRef.current) observer.observe(loaderRef.current)

return () => observer.disconnect()

}, [loading])


// LOAD MORE ON PAGE CHANGE
useEffect(() => {

if (page === 1) return
fetchImages(false, search, page)

}, [page])


// INITIAL LOAD
useEffect(() => {
setImages([])
fetchImages(true)
}, [])

return (

    

<div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-purple-950 pt-28 px-10">

<Navbar />

<SearchBar
search={search}
setSearch={setSearch}
searchImages={() => searchImages(search)}
/>

<CategoryBar searchImages={searchImages} />

{/* CLEAN PREMIUM GRID */}
<div className="
grid
grid-cols-1
sm:grid-cols-2
md:grid-cols-3
lg:grid-cols-4
gap-6
">

{images.map(image => (

<ImageCard
key={image.id}
image={image}
isFav={favorites.some(f => f.id === image.id)}
toggleFav={toggleFav}
openModal={setSelectedImage}
/>

))}

</div>

{/* infinite scroll trigger */}
<div ref={loaderRef} className="h-20"></div>

{loading && (
<div className="flex justify-center mt-8">

<div className="
w-12
h-12
border-4
border-purple-500
border-t-transparent
rounded-full
animate-spin
"></div>

</div>
)}

<ImageModal
selectedImage={selectedImage}
setSelectedImage={setSelectedImage}
/>

</div>

)

}

export default Home