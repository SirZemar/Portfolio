import React from "react";
// Components
import Portrait from "./Portrait";
import Text from "../../common/Text";
import { pageWrapper as Wrapper } from "../../common/pageWrapper";
import Layout, { position, placement } from "../../common/Layout";

const About: React.FC = () => {

  return (
    <Wrapper>
      <Layout >
        <Text position={position.left} placement={placement.center}>
          <h1>About me</h1>
          <p >Hello there! I'm Eduardo, a passionate and experienced Full Stack Developer with a knack for building robust and intuitive web applications. With 3 years of hands-on experience, I thrive on creating seamless user experiences from front to back end.</p>
          <p >Having a growth mindset is essential to my work as a Full Stack Developer. I actively seek out opportunities to expand my knowledge and stay up to date with the latest industry trends and technologies.</p>
        </Text>
        <Portrait position={position.right} placement={placement.center} />
      </Layout>
    </Wrapper>
  )
}

export default About;
