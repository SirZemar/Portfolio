import React from "react";
import Portrait from "./Portrait";
// Components
import Presentation from "./Presentation"
// Styles
import { Wrapper } from "../../common/styles";
import { Container } from "./About.styles";

const About: React.FC = () => {

  return (
    <Wrapper>
      <Container>
        <Presentation />
        <Portrait />
      </Container>
    </Wrapper>
  )
}

export default About;
