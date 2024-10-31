import { Wrapper } from "./layout.jsx"
import { Heading } from "./heading.jsx"

export const Hero = () => {
  return(
    <Wrapper>
      <div>
        <Heading 
          isHero={true}
          title="GALA AKASA WIRYA SATYA"
          subtitle="Cakrawala Skala (CAKSA) is an International Team at Politeknik Elektronika Negeri Surabaya (PENS) that focuses on Research and development of Unmanned Aerial Vehicle (UAV) Technology since 2022."
          btnPrimary="Let's Talk"
          btnSecondary="Read More"
          />
      </div>
    </Wrapper>
  )
}