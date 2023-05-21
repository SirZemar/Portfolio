import React, { useEffect, useRef, useState } from "react";
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
import { LinearProgress } from "@mui/material";

interface Props extends LayoutProps {
  openModal: (boolean: boolean) => void;
  project: Project;
}

const Portal: React.FC<Props> = ({ openModal, project }) => {
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [imageProgress, setImageProgress] = useState(0);

  const [transitionTime, setTransitionTime] = useState('');

  const [imageHeight, setImageHeight] = useState(0);

  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (loading) {
      setImageProgress(Math.floor(Math.random() * (75 - 19) + 20));

      const imgTime = setTimeout(() => {
        setLoading(false);
      }, 200)
      return () => {
        clearTimeout(imgTime);
      }
    }
  }, [])

  useEffect(() => {
    if (imageProgress === 100) {
      const loadedTimer = setTimeout(() => {
        setLoaded(true);
      }, 400);
      return (() => clearTimeout(loadedTimer))
    }
  })

  useEffect((): void => {

    const imgRenderHeight = imageRef.current?.offsetHeight;
    const windowScreenHeight = window.screen.height - 200;

    if (!imgRenderHeight) {
      return
    }
    if (imgRenderHeight >= windowScreenHeight) {
      setImageHeight(windowScreenHeight);
      const transitionSeconds = (1 * windowScreenHeight) / 1200;
      const transitionSecondsStr = transitionSeconds.toString() + 's';
      setTransitionTime(transitionSecondsStr)
    } else {
      setImageHeight(imgRenderHeight)
      const transitionSeconds = (1 * imgRenderHeight) / 1200;
      const transitionSecondsStr = transitionSeconds.toString() + 's';
      setTransitionTime(transitionSecondsStr)
    }
  }, [loaded]);

  return (
    <>
      <Background onClick={() => openModal(false)} />
      <Container>
        <Header>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
        </Header>
        {!loaded && <LinearProgress value={imageProgress} variant="determinate" color="error" style={{ height: "12px", gridArea: 'b' }} />}
        {!loading && <Content>
          <div style={!loaded ? { height: '0px' } : { height: imageHeight, transition: `${transitionTime} ease-in` }} >
            <img ref={imageRef} style={!loaded ? { height: '0px' } : { display: 'block' }} onLoad={() => setImageProgress(100)} src={project.image} alt="project" />
          </div>
        </Content>}
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