import React from "react";
import { Container } from "./Spinner.styles";

interface Props {
}
const Spinner: React.FC<Props> = () => (
  <Container>
    <div className="lds-dual-ring"></div>
  </Container>
);

export default Spinner;