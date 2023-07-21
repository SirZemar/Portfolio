import React from "react";
import { Container } from "./Stars.styles";
import stars from '../../../images/stars/stars.png';
import twinkling from '../../../images/stars/twinkling.png';

const Stars: React.FC = () => (
    <Container stars={stars} twinkling={twinkling}>
        <div className="stars"></div>
        <div className="twinkling"></div>
    </Container>
)

export default Stars;