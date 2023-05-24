import React from "react";
import { Container } from "./Portrait.styles";
// Types
import { LayoutProps } from "../../../common/Layout";
// image
import portraitImg from "../../../images/euport.jpg";

interface Props extends LayoutProps { }

const Portrait: React.FC<Props> = () => {
    return (
        <Container >
            <img className="portrait-image" alt="Me" src={portraitImg} width="350" />
        </Container>
    )
}

export default Portrait;