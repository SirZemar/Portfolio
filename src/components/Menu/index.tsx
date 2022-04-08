import React from "react";
import { Content, Wrapper } from "./Menu.styles";
// Routes
import { Link } from 'react-router-dom';

const Nav: React.FC = () => (
    <Wrapper >
        <Content>
            <Link className="nav_list" to='/'>
                Home
            </Link>
            <Link className="nav_list" to='/skills'>
                Skills
            </Link><Link className="nav_list" to='/portfolio'>
                Portfolio
            </Link><Link className="nav_list" to='/contacts'>
                Contact
            </Link>
        </Content>
    </Wrapper>
)

export default Nav;