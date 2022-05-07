import React from "react";
import { Container, Background } from "./Portal.styles";
import { LayoutProps } from "../../../common/Layout";

interface Props extends LayoutProps {
    openModal: (boolean: boolean) => void;
}

const Portal: React.FC<Props> = ({ openModal }) => {
    return (
        <>
            <Background onClick={() => openModal(false)} />
            <Container >

            </Container>
        </>
    )
}

export default Portal;