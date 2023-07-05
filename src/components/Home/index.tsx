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
          <h1 className="line">Hi, my name is </h1>
          <h2 className="line">
            <span style={{ fontSize: "1.1em", color: "red" }}>E</span>duardo
            Marinho.{" "}
          </h2>
          <h2 className="line">
            I'm a Web Developer.
            <span style={{ display: "inline-block" }}>
              <Button type={Type.ROUTE} path="/game">
                Danger
              </Button>
            </span>
          </h2>
        </Text>
      </Container>
    </Layout>
  </Wrapper>
);

export default Home;
