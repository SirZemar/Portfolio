import React from "react";
import { Container } from "./Text.styles";

import { LayoutProps } from "../Layout"

interface Props extends LayoutProps { }

const Text: React.FC<Props> = ({ children }) => (
    <Container>
        {children}
    </Container>
)

export default Text;