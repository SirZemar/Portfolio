import React from "react";
// Components
import Portrait from "./Portrait";
import Presentation from "./Presentation"
import { pageWrapper as Wrapper } from "../../common/pageWrapper";
import Layout, { position, placement } from "../../common/Layout";

const About: React.FC = () => {

  return (
    <Wrapper>
      <Layout >
        <Presentation position={position.left} placement={placement.center} />
        <Portrait position={position.right} placement={placement.center} />
      </Layout>
    </Wrapper>
  )
}

export default About;
