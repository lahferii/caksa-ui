import { Wrapper } from "./layout"
import { Heading } from "./heading"
import { Card } from "./card"

export const Reviews = () => {
  return(
    <Wrapper index="reviews">
      <Heading
        title="Reviews From Our Members"
      />

      <section className="columns-1 sm:columns-2 md:columns-3">
        <Card
          title="Farhan Kebab"
          subtitle="Team Leader"
          description="Mantap"
        />
        <Card
          title="Reza Kecap"
          subtitle="Project Manager"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum doloremque neque alias quo, rem asperiores consequuntur a soluta autem perspiciatis saepe, laudantium nesciunt earum, repudiandae ex obcaecati accusantium sit eveniet?"
        />
        <Card
          title="Jajang Batagor"
          subtitle="Mechanic"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum doloremque neque alias quo, rem asperiores consequuntur a soluta autem."
        />
        <Card
          title="Roger Sumatera"
          subtitle="Programmer"
          description="Lorem ipsum dolor sit amet, consectetur?"
        />
        <Card
          title="Raihan Whatsapp"
          subtitle="Electrical"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum doloremque neque alias quo, rem asperiores consequuntur a soluta autem perspiciatis saepe, laudantium nesciunt earum, repudiandae ex obcaecati accusantium sit eveniet?"
        />
      </section>
    </Wrapper>
  )
}