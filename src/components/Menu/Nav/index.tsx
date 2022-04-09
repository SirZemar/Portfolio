import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./Nav.styles";

const Nav: React.FC = () => (
    <Container>
        <Link className="nav_list" to='/about'>
            About
        </Link>
        <Link className="nav_list" to='/skills'>
            Skills
        </Link>
        <Link className="nav_list" to='/portfolio'>
            Portfolio
        </Link>
        <Link className="nav_list" to='/contacts'>
            Contacts
        </Link>
    </Container>
)

export default Nav;