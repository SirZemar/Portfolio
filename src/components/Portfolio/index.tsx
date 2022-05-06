import React from "react";
import Layout, { position, placement } from "../../common/Layout";
import { pageWrapper as Wrapper } from "../../common/pageWrapper";
import { Container, Title, Project } from "./Portfolio.styles";

import { projectsData } from "../../images/mock";


const Portfolio: React.FC = () => (
    <Wrapper>
        <Layout>
            <Title position={position.topSlim} placement={placement.center}>
                <h1>What I have been doing</h1>
            </Title>
            <Container position={position.centerWide} placement={placement.withAuto('center', true)}>
                {projectsData.map((project, index) =>
                    <Project key={index} backgroundUrl={project.picture}></Project>
                )}
            </Container>
        </Layout>
    </Wrapper >
)

export default Portfolio;
