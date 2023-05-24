import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "./Nav.styles";

const Nav: React.FC = () => {

    const [open, setOpen] = useState('');

    useEffect(() => {
    }, [])

    return (
        <Container>
            <NavLink className="nav_list" to='/about'>
                About
            </NavLink >
            <NavLink className="nav_list" to='/skills'>
                Skills
            </NavLink >
            <NavLink className="nav_list" to='/portfolio'>
                Portfolio
            </NavLink >
            <NavLink className="nav_list" to='/info'>
                Infos
            </NavLink >
        </Container>
    )
}

export default Nav;