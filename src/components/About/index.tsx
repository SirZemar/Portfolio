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
          <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque saepe rerum nostrum officia? Beatae fugiat nostrum, est quaerat cupiditate temporibus, assumenda soluta consequuntur repellat porro ipsum qui voluptates accusamus neque.</span><span>Fugiat ut debitis, qui velit exercitationem hic corporis molestias aliquid unde officia deserunt enim soluta iusto odio. Veritatis, rem nulla repellat mollitia vel, iusto consequuntur corporis fugit cum laboriosam odio?</span></p>
        </Text>
        <Portrait position={position.right} placement={placement.center} />
      </Layout>
    </Wrapper>
  )
}

export default About;
