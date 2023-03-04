import React from "react";
import { Container } from "./Spinner.styles";

interface Props {
}
export const Spinner: React.FC<Props> = () => (
    <Container>
        <div className="lds-dual-ring"></div>
    </Container>

)   