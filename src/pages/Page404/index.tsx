import React from "react";
import { Container } from "./Page404.styles";
import Layout, { position, placement } from "../../common/Layout";
import { Wrapper } from "../../common/Wrapper";

interface Props {}
export const Page404: React.FC<Props> = () => (
  <Wrapper>
    <Layout>
      <Container position={position.centerWide} placement={placement.top}>
        <h1>Oops!</h1>
        <p>404 - Can't seem to find the page you are looking for.</p>
      </Container>
    </Layout>
  </Wrapper>
);
