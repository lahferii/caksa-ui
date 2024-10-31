import { Heading } from "./heading"
import { Wrapper } from "./layout"
import img1 from "../assets/partners/djarum_platinum.jpg"
import img2 from "../assets/partners/akhishop.png"
import img3 from "../assets/partners/buaya.png"
import img4 from "../assets/partners/isen.png"
import img5 from "../assets/partners/istana.png"
import img6 from "../assets/partners/spectrum.png"
import img7 from "../assets/partners/theater.png"

export const Partner = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7]
  return(
    <Wrapper>
      <Heading
        title="Supported By Community"
        subtitle="Our partners contribute in various ways, providing support in knowledge, materials, funding, and more. Together, we strive to make the skies brighter and our UAV technology more sustainable."
      />

      <section className="relative overflow-hidden">
        <div className="top-0 left-0 z-[5] absolute bg-gradient-to-r from-white to-transparent w-16 h-full p-5"></div>
        <div className="flex animate-slide whitespace-nowrap items-center gap-10">
          {images.concat(images).map((src, id) => (
            <div key={id} className="flex-none w-40">
              <img className="w-full h-auto saturate-0" src={src} alt={src} />
            </div>
          ))}
        </div>
        <div className="top-0 right-0 z-[5] absolute bg-gradient-to-l from-white to-transparent w-16 h-full p-5"></div>
      </section>
    </Wrapper>
  )
}