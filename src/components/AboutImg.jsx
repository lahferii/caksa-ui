import { useState } from "react"
import img1 from "../assets/gallery/gallery(1).png"
import img2 from "../assets/gallery/gallery(2).png"
import img3 from "../assets/gallery/gallery(3).jpg"
import img4 from "../assets/gallery/gallery(4).jpg"
import img5 from "../assets/gallery/gallery(5).png"
import arrow from "../assets/arrow.svg"
const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
]

export const AboutImg = () => {
  const [showImg, setShowImg] = useState(0)
  
  function handleNext(){
    setShowImg((prev) => (prev + 1) % images.length)
  }
  function handlePrev(){
    setShowImg((prev) => (prev - 1 + images.length) % images.length)
  }
  
  return(
    <div className="group w-full h-72 lg:h-[500px] overflow-hidden mb-5 relative">
        <div className="w-20 h-full bg-gradient-to-r from-zinc-700 to-transparent absolute z-10 top-0 left-0 flex items-center">
          <button onClick={handleNext}>
            <img src={arrow} alt={arrow} className="w-16 -rotate-90 cursor-pointer"/>
          </button>
        </div>

        <div className="w-20 h-full bg-gradient-to-l from-zinc-700 to-transparent absolute z-10 top-0 right-0 flex items-center">
          <button onClick={handlePrev}>
            <img src={arrow} alt={arrow} className="w-16 rotate-90 cursor-pointer"/>
          </button>
        </div>

      <img src={images[showImg]} alt={images[showImg]} className="w-full h-full object-cover object-center saturate-0 group-hover:saturate-100 duration-500"/>
    </div>
  )
}