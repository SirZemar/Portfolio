import React from "react";
import { Container } from './Asteroids.styles';
// Images
import diffuse from '../../../images/asteroids/diffuse.png';
import filter from '../../../images/asteroids/filter5.png';

const Asteroids: React.FC = () => (
    <Container diffuse={diffuse} filter={filter}>
        <div className="unit trajectory2"></div>
        <div className="unit trajectory1"></div>
    </Container>
)

export default Asteroids