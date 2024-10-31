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
    <div className="group w-full lg:h-[500px] overflow-hidden mb-5 relative">
      <div className="absolute w-full h-full z-10 flex justify-between items-center">
        <div className="">
          <img onClick={handleNext} src={arrow} alt={arrow} className="w-16 -rotate-90 cursor-pointer"/>
        </div>
        <div className="">
          <img onClick={handlePrev} src={arrow} alt={arrow} className="w-16 rotate-90 cursor-pointer"/>
        </div>
      </div>
      <img src={images[showImg]} alt={images[showImg]} className="w-full h-full object-cover object-center saturate-0 group-hover:saturate-100 duration-500"/>
    </div>
  )
}