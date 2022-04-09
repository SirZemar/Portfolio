import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Logo.styles";

const Logo: React.FC = () => (
    <Container>
        <Link className="logo" to='/'>
            <img src="https://via.placeholder.com/80x100.png/09f/fff" />
        </Link>
    </Container>
)

export default Logo;