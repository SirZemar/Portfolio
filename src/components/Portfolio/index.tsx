import React, { useState } from "react";
import Layout, { position, placement } from "../../common/Layout";
import { pageWrapper as Wrapper } from "../../common/pageWrapper";
import { Container, Title, Project } from "./Portfolio.styles";

import { projectsData } from "../../images/mock";

import Portal from "./Portal";

const Portfolio: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = (boolean: boolean) => {
        setIsOpen(boolean)
    }
    return (
        <Wrapper>
            <Layout>
                <Title position={position.topSlim} placement={placement.center}>
                    <h1>What I have been doing</h1>
                </Title>
                <Container position={position.centerWide} placement={placement.withAuto('center', true)}>
                    {projectsData.map((project, index) =>
                        <Project key={index} onClick={() => openModal(true)} backgroundUrl={project.picture}></Project>
                    )}
                </Container>
                {isOpen && <Portal openModal={openModal} position={position.centerWide} placement={placement.center}></Portal>}
            </Layout>
        </Wrapper >
    )
}

export default Portfolio;
