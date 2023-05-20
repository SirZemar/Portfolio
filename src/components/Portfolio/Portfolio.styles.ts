import styled from "styled-components";
import { LayoutProps } from "../../common/Layout";

interface Props extends LayoutProps {
    projectsCount?: number;
}

interface ProjectProps {
    backgroundUrl: string;
}


const color = '255, 0, 0';

export const Container = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.projectsCount},
    clamp(80px, 8vw, 150px)
  );
  background-color: rgb(${color}, 0);

  .project-skeleton {
    transform: none;
    aspect-ratio: 1/1;
  }
`;

export const Title = styled.div<Props>``;

export const Project = styled.div<Props & ProjectProps>`
  background-image: url(${(props) => props.backgroundUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  aspect-ratio: 1 / 1;
  cursor: pointer;
  position: relative;

  :after {
    content: "";
    background: black;
    opacity: 0;
    display: block;
    position: absolute;
    height: 100%;
    transition: 0.2s;
    width: 100%;
  }
  :hover {
    :after {
      opacity: 0.2;
    }
  }
`;