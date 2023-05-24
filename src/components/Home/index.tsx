import React from "react";

import { pageWrapper as Wrapper } from "../../common/pageWrapper";
import { Container } from "./Home.styles";

import Layout, { position, placement } from "../../common/Layout";
import Text from "../../common/Text";
import { Button, Type } from "../../common/Button";

export interface Coordenates {
  x: number;
  y: number;
  id: string;
}

const Home: React.FC = () => (
  <Wrapper>
    <Layout>
      <Container position={position.centerWide} placement={placement.left}>
        <Text>
          <h1 style={{ fontSize: "4rem", margin: "0", letterSpacing: '2px' }}>
            Hi, my name is </h1>
          <h1 style={{ fontSize: "4rem", margin: "0", letterSpacing: '2px', paddingLeft: "60px", lineHeight: "80px" }}>
            <span style={{ fontSize: '1.1em', color: 'red' }}>E</span>duardo Marinho. </h1>
          <h1 style={{ fontSize: "4rem", margin: "0", letterSpacing: '2px', paddingLeft: "120px" }}>
            I'm a Web Developer.
            <span style={{ display: "inline-block" }}>
              <Button type={Type.ROUTE} path="/game">
                Danger
              </Button>
            </span>
          </h1>
        </Text>
      </Container>
    </Layout>
  </Wrapper>
);

export default Home;
