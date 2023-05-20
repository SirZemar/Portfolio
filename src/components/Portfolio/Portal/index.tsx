import React from "react";
import {
  Content,
  Background,
  Header,
  Footer,
  Container,
} from "./Portal.styles";
import { LayoutProps } from "../../../common/Layout";
import { Project } from "../../../model/project";
import { Button, Type } from "../../../common/Button";

interface Props extends LayoutProps {
  openModal: (boolean: boolean) => void;
  project: Project;
}

const Portal: React.FC<Props> = ({ openModal, project }) => {
  return (
    <>
      <Background onClick={() => openModal(false)} />
      <Container>
        <Header>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </Header>
        <Content>
          <img src={project.image} alt="project" />
        </Content>
        <Footer>
          <Button type={Type.LINK} link={project.website}>
            Check it out!
          </Button>
        </Footer>
      </Container>
    </>
  );
};

export default Portal;