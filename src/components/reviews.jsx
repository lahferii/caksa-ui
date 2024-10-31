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
          title="Adrian Pramono"
          subtitle="Team Leader"
          description="Mantap"
        />
        <Card
          title="Bima Santoso"
          subtitle="Project Manager"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum doloremque neque alias quo, rem asperiores consequuntur a soluta autem perspiciatis saepe, laudantium nesciunt earum, repudiandae ex obcaecati accusantium sit eveniet?"
        />
        <Card
          title="Melati Indah"
          subtitle="Mechanic"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum doloremque neque alias quo, rem asperiores consequuntur a soluta autem."
        />
        <Card
          title="Sari Nuraini"
          subtitle="Programmer"
          description="Lorem ipsum dolor sit amet, consectetur?"
        />
        <Card
          title="Citra Ramadhani"
          subtitle="Electrical"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum doloremque neque alias quo, rem asperiores consequuntur a soluta autem perspiciatis saepe, laudantium nesciunt earum, repudiandae ex obcaecati accusantium sit eveniet?"
        />
      </section>
    </Wrapper>
  )
}