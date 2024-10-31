import { Wrapper } from "./layout"
import { Heading } from "./heading"
import { AboutImg } from "./AboutImg"

export const About = () => {
  
  return(
    <Wrapper index="about">
      <Heading
        title="About Us"
      />

      <AboutImg/>

      <article>
        <p className="tracking-wider leading-relaxed mb-2">
          To lead global innovation in aeronautics, Cakrawala Skala envisions shaping the forefront of aviation and UAV technology, contributing to a sustainable and interconnected world.
        </p>
        <p className="tracking-wider leading-relaxed mb-2">
          Since 2022, CAKSA has been passionately crafting Unmanned Aerial Vehicles (UAVs), an evolution from the pioneering days of the PENS Aeronautics team, actively competing in the national KRTI (Indonesian Flying Robot Contest) since 2007.
        </p>
        <p className="tracking-wider leading-relaxed">
          Our CAKSA family is a harmonious blend of technical brilliance and non-technical prowess. The technical division delves into mechanics, hardware, software, and vision, while the non-technical division expertly manages branding, sponsorship, and administration. Guided by dedicated Project Managers and Team Leaders, our journey is further enriched by the mentorship of three seasoned lecturers with deep expertise in Unmanned Aerial Vehicles (UAV). Ready to witness the skies with us?
        </p>
      </article>
    </Wrapper>
  )
}