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
            <img className="portrait-image" src={portraitImg} width="450" />
        </Container>
    )
}

export default Portrait;