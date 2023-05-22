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
      <Container position={position.top} placement={placement.bottom}>
        <Text>
          <h1 style={{ fontSize: "4rem", margin: "0" }}>
            Hi, my name is José Eduardo. I'm a Web Developer.
            <span style={{ display: "inline-block" }}>
              <Button type={Type.ROUTE} path="/game">
                Save Earth
              </Button>
            </span>
          </h1>
        </Text>
      </Container>
    </Layout>
  </Wrapper>
);

export default Home;
