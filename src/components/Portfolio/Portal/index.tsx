import React from "react";
import { Container, Background, Header, Footer } from "./Portal.styles";
import { LayoutProps } from "../../../common/Layout";
import { Project } from "../../../model/project";
import { Button } from "../../../common/Button"

interface Props extends LayoutProps {
    openModal: (boolean: boolean) => void;
    project: Project;
}

const Portal: React.FC<Props> = ({ openModal, project }) => {
    return (
        <>
            <Background onClick={() => openModal(false)} />
            <Header>
                <h1>{project.name}</h1>
                <p>{project.description}</p>

            </Header>
            <Container>
                <img src={project.image} />
            </Container>
            <Footer>
                <Button link={project.website}>Check it out!</Button>
            </Footer>
        </>
    )
}

export default Portal;