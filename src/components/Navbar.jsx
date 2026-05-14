import { useState } from "react"

function Navbar() {

const [active, setActive] = useState("explore")

return (

<div className="
fixed top-0 left-0 w-full z-50
backdrop-blur-xl
bg-black/60
border-b border-white/10
px-8 py-4
flex items-center justify-between
text-white
">

{/* LEFT - LOGO */}
<div className="flex items-center gap-2">

<div className="w-3 h-3 rounded-full bg-purple-500"></div>

<h1 className="text-xl font-bold tracking-wide">
Pixel Gallery
</h1>

</div>

{/* CENTER - NAV LINKS */}
<div className="
hidden md:flex
gap-10
text-sm
">

<p
onClick={() => setActive("explore")}
className={`
cursor-pointer transition
${active === "explore"
? "text-white font-semibold"
: "text-white/60 hover:text-white"}
`}
>
Explore
</p>

<p
onClick={() => setActive("favorites")}
className={`
cursor-pointer transition
${active === "favorites"
? "text-white font-semibold"
: "text-white/60 hover:text-white"}
`}
>
Favorites
</p>

<p
onClick={() => setActive("about")}
className={`
cursor-pointer transition
${active === "about"
? "text-white font-semibold"
: "text-white/60 hover:text-white"}
`}
>
About
</p>

</div>

{/* RIGHT - SEARCH ICON STYLE BUTTON */}
<div className="flex items-center gap-3">

<div className="
w-9 h-9
rounded-full
bg-white/10
hover:bg-purple-600
transition
cursor-pointer
flex items-center justify-center
">

🔍

</div>

<div className="
w-9 h-9
rounded-full
bg-white/10
hover:bg-purple-600
transition
cursor-pointer
flex items-center justify-center
">

⚙️

</div>

</div>

</div>

)

}

export default Navbar