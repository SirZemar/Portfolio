import React from "react";
import { Link } from "react-router-dom";
import { Container, Image } from "./Logo.styles";

import elogo from "../../../images/logo/elogo2.svg"

const Logo: React.FC = () => (
    <Container>
        <Link className="logo" to='/'>
            <Image image={elogo}></Image>
        </Link>
    </Container>
)

export default Logo;