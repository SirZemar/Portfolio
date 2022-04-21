import React from "react";
import Layout, { position, placement } from "../../common/Layout";
import { pageWrapper as Wrapper } from "../../common/pageWrapper";
import { Container, Title } from "./Portfolio.styles";


const Portfolio: React.FC = () => (
    <Wrapper>
        <Layout>
            <Title position={position.topSlim} placement={placement.center}>
                <h1>Portfolio</h1>
            </Title>
            <Container position={position.centerWide}>

            </Container>
        </Layout>
    </Wrapper>
)

export default Portfolio;
