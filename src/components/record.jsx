import { Wrapper } from "./layout"
import { Heading } from "./heading"
import { Card } from "./card"

export const Record = () => {
  return(
    <Wrapper>
      <Heading
        title="Notable Achievment"
        subtitle="Inagurated in 2022, our team has swiftly soared to success, achieving notable milestones in 2023.
        This is just the beginning; we are geared up to pursue even greater accomplishments in the future."
      />

      <Card
        title="Finalist At International  Unmanned Aerial Vehicles Competition - TEKNOFEST 2023"
      />
      <Card
        title="2nd Place At International Startup Competition - TEKNOFEST 2023"
      />
    </Wrapper>
  )
} 