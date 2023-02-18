import React from "react";
import { Container, Background } from "./Portal.styles";
import { LayoutProps } from "../../../common/Layout";
import { Project } from "../../../model/project";

interface Props extends LayoutProps {
    openModal: (boolean: boolean) => void;
    project: Project;
}

const Portal: React.FC<Props> = ({ openModal, project }) => {
    return (
        <>
            <Background onClick={() => openModal(false)} />
            <Container image={project.image}>
                <img src={project.image} />
            </Container>
        </>
    )
}

export default Portal;