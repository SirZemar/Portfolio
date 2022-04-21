import React from "react";
import { Container } from "./Portrait.styles";
// Types
import { LayoutProps } from "../../../common/Layout";

interface Props extends LayoutProps { }

const Portrait: React.FC<Props> = () => {
    return (
        <Container >
            <img className="size" src="https://via.placeholder.com/500x600.png/09f/fff" />
        </Container>
    )
}

export default Portrait;